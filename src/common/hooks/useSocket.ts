import { useEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import {
  showAsyncToast,
  ESocketEventlist,
  socketConnect,
  socketDisonnect,
  setSiMem,
  setSystemSpace,
  SET_SOCKET_CONNECTED,
} from '~/actions'
import io from 'socket.io-client'
import { Systeminformation } from 'systeminformation'
import { Socket } from 'socket.io-client'

const REACT_APP_SOCKET_ENDPOINT = process.env.REACT_APP_SOCKET_ENDPOINT

export const useSocket = () => {
  const socket: Socket = io(REACT_APP_SOCKET_ENDPOINT, {
    autoConnect: true,
  })
  const dispatch = useDispatch()

  const onYoureWelcome = useCallback((_data: { data: 'test' }) => {
    // dispatch(
    //   showAsyncToast({
    //     type: 'info',
    //     text: `Socket: ${JSON.stringify(data)}`,
    //     delay: 5000,
    //   })
    // )
  }, [])
  const onConnect = useCallback(() => {
    dispatch(showAsyncToast({
      type: 'success',
      text: 'Socket connected',
      delay: 5000,
    }))
    dispatch({ type: SET_SOCKET_CONNECTED })
  }, [dispatch])
  const onDisconnect = useCallback(() => {
    dispatch(socketDisonnect())
  }, [dispatch])
  const onSiMem = useCallback((siOutput: Systeminformation.MemData) => {
    dispatch(setSiMem(siOutput))
  }, [dispatch])
  const onSystemSpace = useCallback((data: { code: string | any, stdout: string | any, stderr: string | any }) => {
    dispatch(setSystemSpace(data))
  }, [dispatch])

  useEffect(() => {
    dispatch(socketConnect(socket))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  useEffect(() => {
    socket.on('connect', onConnect)
    socket.on(ESocketEventlist.YOURE_WELCOME, onYoureWelcome)
    socket.on(ESocketEventlist.SI_MEM, onSiMem)
    socket.on(ESocketEventlist.SYSTEM_SPACE, onSystemSpace)
    socket.on('disconnect', onDisconnect)

    return () => {
      socket.off('connect', onConnect)
      socket.off(ESocketEventlist.YOURE_WELCOME, onYoureWelcome)
      socket.off(ESocketEventlist.SI_MEM, onSiMem)
      socket.off(ESocketEventlist.SYSTEM_SPACE, onSystemSpace)
      socket.off('disconnect', onDisconnect)
    }
  }, [dispatch, onYoureWelcome, onSiMem, onDisconnect, socket, onSystemSpace, onConnect])

  return null
}