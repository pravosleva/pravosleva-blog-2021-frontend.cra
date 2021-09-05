import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'grid',
    columnGap: theme.spacing(2),
    rowGap: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr',
    },
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
    },
    gridAutoFlow: 'dense',
  },
  gridItemBg: {
    objectFit: 'cover',
    borderRadius: '8px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  gridItemBox: {
    height: '100%',
    background: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(255, 255, 255, 1))',
    borderRadius: 'inherit',
    backgroundImage: '',
    padding: theme.spacing(2, 2, 2, 2),
    '& > div:not(:last-child)': {
      marginBottom: theme.spacing(2),
    },
    color: '#fff',

    display: 'flex',
    flexDirection: 'column',
  },
  gridItemTitle: {},
  gridItemDescription: {
    marginBottom: 'auto',
    height: '100%',
  },
  gridItemAction: {},
}))
