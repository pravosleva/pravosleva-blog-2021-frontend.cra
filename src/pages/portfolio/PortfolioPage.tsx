import { useCallback, useState } from 'react'
import { Button, Grid, List, ListItem, ListItemText } from '@material-ui/core'
import { useStyles } from './styles'
import { ResponsiveBlock } from '~/common/material/ResponsiveBlock'
import { Modal } from '~/common/material/Modal'
// import { useDispatch } from 'react-redux'
// import { loadPageData, setIsModalOpened } from '~/actions'

// const isDev = process.env.NODE_ENV === 'development'

export const PortfolioPage = () => {
  const classes = useStyles()

  const goExternalLink = useCallback(
    (link: string) => () => {
      window.open(link, "_blank");
    },
    []
  )
  // const dispatch = useDispatch()
  // const tstGetProject = (id: string) => {
  //   dispatch(setIsModalOpened(true))
  //   dispatch(loadPageData(id))
  // }

  const [isPubProjectVariantsModalOpened, setIsPubProjectVariantsModalOpened] = useState<boolean>(false)
  const handleClosePub2021 = useCallback(() => {
    setIsPubProjectVariantsModalOpened(false)
  }, [setIsPubProjectVariantsModalOpened])
  const handleOpenPub2021 = useCallback(() => {
    setIsPubProjectVariantsModalOpened(true)
  }, [setIsPubProjectVariantsModalOpened])

  return (
    <>
      <Modal
        isOpened={isPubProjectVariantsModalOpened}
        onClose={handleClosePub2021}
        titleRenderer={() => (
          <span>KanBan 2021</span>
        )}
        maxWidth='sm'
        fullWidth
        contentRenderer={() => (
          <div>
            Альфа тестирование. Все комнаты чата являются публичными.
            <br />
            Есть два варианта входа:
            <ul>
              <li><b>DEMO:</b> Зайти от гостя</li>
              <li>Зайти через бота (будет доступно немного больше фич)</li>
            </ul>
          </div>
        )}
        actionsRenderer={() => (
          <>
            <Button onClick={goExternalLink('http://pravosleva.ru/express-helper/chat/#?room=ux-test')} variant="contained" color="primary">
              Гость
            </Button>
            <Button onClick={goExternalLink('https://t.me/pravosleva_bot?start=invite-chat_uxTest')} variant="contained" color="primary">
              Через бота
            </Button>
            <Button autoFocus onClick={handleClosePub2021} color="secondary">
              Close
            </Button>
          </>
        )}
      />
      <ResponsiveBlock isLimited={true}>
        <>
          <h1>Experience</h1>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <h2>2021</h2>
              <p>smartprice.ru</p>
              <List className={classes.root} subheader={<li />}>
                <ListItem
                  className={classes.listItem}
                  // onClick={goExternalLink('http://pravosleva.ru/express-helper/chat/#?room=open-chat')}
                  // onClick={goExternalLink('https://t.me/pravosleva_bot?start=chat-invite_uxTest')}
                  onClick={handleOpenPub2021}
                >
                  <ListItemText primary="KanBan 2021" secondary="Sockets & TG bot experience" />
                </ListItem>
                <ListItem
                  className={classes.listItem}
                  onClick={goExternalLink('https://t.me/pravosleva_bot')}
                >
                  <ListItemText primary="Telegram Bot @pravosleva_bot" secondary="Подопытный бот" />
                </ListItem>
                <ListItem
                  className={classes.listItem}
                  onClick={goExternalLink('https://smartprice.ru')}
                >
                  <ListItemText primary="smartprice.ru" secondary="Продажа б/у смартфонов" />
                </ListItem>
                {/* <ListItem
                  className={classes.listItem}
                  onClick={() => {
                    tstGetProject(isDev ? '612401db5c6dcee7210b482a' : '612cf8f8d25d9441a8b12852')
                  }}
                >
                  <ListItemText primary="QR Authorization" secondary="QR auth experience (password: qrdoc)" />
                </ListItem> */}
                <ListItem
                  className={classes.listItem}
                  onClick={goExternalLink('http://code-samples.space')}
                >
                  <ListItemText primary="Code Samples 2.0" secondary="Быстрые заметки" />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} md={6}>
              <h2>2020</h2>
              <p>Ремонт</p>
              <List className={classes.root} subheader={<li />}>
                <ListItem
                  className={classes.listItem}
                  onClick={goExternalLink('http://selection4test.ru:1338/demo/')}
                >
                  <ListItemText primary="My Remont 2020" secondary="Мониторинг затрат на ремонт" />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} md={6}>
              <h2>2019</h2>
              <p>Анализ прогнозов команды</p>
              <List className={classes.root} subheader={<li />}>
                <ListItem
                  className={classes.listItem}
                  onClick={goExternalLink('http://selection4test.ru:1112')}
                >
                  <ListItemText primary="Team Scoring 2019" secondary="Анализ обещаний разработчиков" />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} md={6}>
              <h2>2018</h2>
              <p>uremont.com</p>
              <List className={classes.root} subheader={<li />}>
                <ListItem
                  className={classes.listItem}
                  onClick={goExternalLink('https://uremont.com')}
                >
                  <ListItemText primary="uremont.com" secondary="Агрегатор автосервисов" />
                </ListItem>
                <ListItem
                  className={classes.listItem}
                  onClick={goExternalLink('http://selection4test.ru/projects/react-maps-lab')}
                >
                  <ListItemText primary="React Google maps lab" secondary="Google maps in React experience" />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} md={6}>
              <h2>2017</h2>
              <p>HVAC tools & react@15 experience</p>
              <List className={classes.root} subheader={<li />}>
                <ListItem
                  className={classes.listItem}
                  onClick={goExternalLink('https://selection4test.ru/projects/auxiliary-calc')}
                >
                  <ListItemText primary="Liquid parameters UI" secondary="Расчет параметров жидкости" />
                </ListItem>
                <ListItem
                  className={classes.listItem}
                  onClick={goExternalLink('https://selection4test.ru/projects/thermocold-lines')}
                >
                  <ListItemText primary="HEVA FC" secondary="Подбор чиллеров Thermocold линейки HEVA FC" />
                </ListItem>
                <ListItem
                  className={classes.listItem}
                  onClick={goExternalLink('https://selection4test.ru/projects/midea-lines')}
                >
                  <ListItemText primary="HEVA FC" secondary="Подбор модульных чиллеров Midea" />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} md={6}>
              <h2>2016</h2>
              <p>promventholod.ru</p>
              <List className={classes.root} subheader={<li />}>
                <ListItem
                  className={classes.listItem}
                  onClick={goExternalLink('https://selection4test.ru/projects/cargo-react')}
                >
                  <ListItemText primary="Cargo 2016: Оценка загрузки фуры v1" secondary="Для расстановки грузов с разными габаритами" />
                </ListItem>
                <ListItem
                  className={classes.listItem}
                  onClick={goExternalLink('https://selection4test.ru/')}
                >
                  <ListItemText primary="Cargo 2016: Оценка загрузки фуры v0" secondary="Для расстановки грузов с идентичными габаритами" />
                </ListItem>
                <ListItem
                  className={classes.listItem}
                  onClick={goExternalLink('https://selection4test.ru/projects/total-work-time-analysis')}
                >
                  <ListItemText primary="Working time" secondary="Анализ обратной связи от менеджеров отдела продаж" />
                </ListItem>
                <ListItem
                  className={classes.listItem}
                  onClick={goExternalLink('https://www.npmjs.com/package/liquid-parameters')}
                >
                  <ListItemText primary="Liquid parameters lib" secondary="HVAC engineer's tool" />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} md={6}>
              <h2>2015</h2>
              <p>zavodsezon.ru</p>
              <List className={classes.root} subheader={<li />}>
                <ListItem
                  className={classes.listItem}
                  onClick={goExternalLink('https://selection4test.ru/projects/sezon-lines')}
                >
                  <ListItemText primary="SEZON VENT" secondary="Подбор вент оборудования завода SEZON" />
                </ListItem>
                <ListItem
                  className={classes.listItem}
                  onClick={goExternalLink('https://www.npmjs.com/package/id-diagram')}
                >
                  <ListItemText primary="id-diagram" secondary="Диаграмма влажного воздуха (оцифровка)" />
                </ListItem>
                <ListItem
                  className={classes.listItem}
                  onClick={goExternalLink('https://www.npmjs.com/package/get-parabola')}
                >
                  <ListItemText primary="get-parabola" secondary="Math functions tools" />
                </ListItem>
                <ListItem
                  className={classes.listItem}
                  onClick={goExternalLink('https://www.npmjs.com/package/interpolate-by-pravosleva')}
                >
                  <ListItemText primary="interpolate-by-pravosleva" secondary="Math interpolate lib" />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </>
      </ResponsiveBlock>
    </>
  )
}
