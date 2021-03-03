import Header from './Header';

const layoutStyle = {
    margin : 20,
    padding : 20, 
    flexShrink : 5,
    width : '100%'
}

const Layout = props => (
    <div style={layoutStyle}>
        <Header /> {props.children}
        {/* {props.children} */}
    </div>
)

export default Layout