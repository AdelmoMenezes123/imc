import {Container, Grid, Typography} from '@material-ui/core'
import styles from './header.module.scss'

export default () =>{
    return(
      <div className={styles.header}>
      <Container fixed>
           <Grid container justify="center" alignItems="center" spacing={5}>
               <Grid item xs={12} sm={6}>
               <Typography variant="h3" className={styles.header__title}>Calcula IMC </Typography>
               <Typography >O IMC é o índice da Massa corporal, é ultilizado para saber se o peso esta de acordo com a Altura</Typography>
               </Grid>

               <Grid item xs={12} sm={6}>
               <img src="/medic.png" alt='medico e paciente'/>
           </Grid>
           </Grid>
      </Container>
      </div>
    )
  }