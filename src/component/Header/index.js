import {Container, Grid, Typography} from '@material-ui/core'
import styles from './header.module.scss'

export default () =>{
    return(
      <div className={styles.header}>
      <Container fixed>
           <Grid container justify="center" alignItems="center" spacing={5}>
               <Grid item xs={12} sm={6}>
                <Typography variant="h3" className={styles.header__title}>Trabalho N2 - Gest. Financeira - Calculadora VPL </Typography>
                <Typography >VPL: Valor presente liquido</Typography>
                <Typography >Rt: Fluxo de caixa liquida no tempo T</Typography>
                <Typography >i: Taxa de desconto </Typography>
                <Typography >t: Tempo de fluxo em caixa</Typography>
               </Grid>

               <Grid item xs={12} sm={6}>
               <img src="formula.jpeg" alt='medico e paciente'/>
           </Grid>
           </Grid>
      </Container>
      </div>
    )
  }