import { useEffect } from 'react'
import { ResponsiveBlock } from '~/common/material/ResponsiveBlock'
import {
  loadCrmPagesData,
} from '~/actions'
import { useDispatch, useSelector } from 'react-redux'
import { IRootState } from '~/store'
import { PagesGrid } from '~/common/material/PagesGrid'
import { ToggleText } from '~/common/react-spring'

export const ProjectsPage = () => {
  const dispatch = useDispatch()
  const projects = useSelector((state: IRootState) => state.crmPages.projects)
  const isPagesLoading = useSelector((state: IRootState) => state.crmPages.isLoading)
  const isPagesLoaded = useSelector((state: IRootState) => state.crmPages.isLoaded)

  useEffect(() => {
    dispatch(loadCrmPagesData())
  }, [dispatch])

  return (
    <ResponsiveBlock isLimited={true}>
      <>
        <h1 style={{ display: 'flex' }}><span>All</span><span>&nbsp;</span><ToggleText two={['Projects 🧨', 'Experience 🧪']} /></h1>
        {
          isPagesLoaded
          ? projects.length > 0
            ? <PagesGrid pages={projects} />
            : 'No pages yet...'
          : isPagesLoading
              ? 'Loading...'
              : 'Not loaded'
        }
      </>
    </ResponsiveBlock>
  )
}