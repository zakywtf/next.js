import {useRouter} from 'next/router';
import Layout from '../components/MyLayout';

const fontFamily = {
    fontFamily : 'Courier New',
    width : '70%'
}

const Index = props => (
    <Layout>
        <h1>About Me</h1>
        <p style={fontFamily}>
            I am Nova Zaky Fathoni, 24 years old. I work as a web backend developer. 
            I have some experience when I worked as a web backend developer. 
            I am interest in working for companies that can help me develop and improve my skills in programming.
        </p>
    </Layout>
)

export default Index