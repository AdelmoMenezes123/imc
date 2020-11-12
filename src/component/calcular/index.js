import {useState} from 'react'
import {Container, Grid, Typography, TextField, Button} from '@material-ui/core'
import styles from './calcular.module.scss'

export default() => {

    const [altura, setAltura] = useState(0)
    const [peso, setPeso] = useState(0)
    const [imc, setImc] = useState()

    const calcularIMC = ()=>{
        setImc((peso/(altura*altura)).toFixed(2))
    }

    const verifyIMC = ()=>{
        if (imc < 18.5) return 'Abaixo do peso'    
            
        if (imc < 24.9) return 'Peso normal'
            
        if (imc < 29.9) return 'Sobrepeso'
            
        if (imc < 34.9) return 'Obesidade grau 1' 
            
        if (imc < 39.9) return 'Obesidade grau 2'
            
        if (imc > 39.9) return 'Obesidade grau 3'
    }

    const verifyCor = ()=>{
        if (imc < 18.5) return 'f44336'    
            
        if (imc < 24.9) return '4caf50'
            
        if (imc < 29.9) return  'f57c00'
            
        if (imc < 34.9) return ' d32f2f'
            
        if (imc < 39.9) return ' f44336'
            
        if (imc > 39.9) return ' 9a0036'
    }

    return (
        <div className={styles.calculator}>
            <Container maxWidth="xs">
                <Typography variant="h3" color="primary">Calculadora VPL</Typography> 
                
                <Grid container direction="column" spacing={2}>
                    <Grid item>
                        <TextField label="Fluxo de caixa liquida" variant="filled" fullWidth type="number" value={altura} onChange={e=> setAltura(e.target.value)}/>
                    </Grid>

                    <Grid item>
                        <TextField label="taixa de desconto " variant="filled" fullWidth type="number" value={peso} onChange={e => setPeso(e.target.value)}/>
                    </Grid>

                    <Grid item>
                        <TextField label="tempo de fluxo de caixa" variant="filled" fullWidth type="number" value={peso} onChange={e => setPeso(e.target.value)}/>
                    </Grid>

                    <Grid item>
                        <Button variant="contained" color="primary" fullWidth onClick={()=>{calcularIMC()}}>Calcular</Button>
                    </Grid>

                    {
                        imc &&
                        
                        <Grid>
                            <Typography>O seu IMC é: {imc}</Typography>
                            <Typography style={{color:`#${verifyCor()}`}} >{verifyIMC()}</Typography>
                        </Grid>
                    }
                </Grid>
            </Container>
        </div>
    )
}