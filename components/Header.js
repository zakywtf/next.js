import Link from 'next/link';

const linkStyle = {
    marginRight : 20,
    fontFamily : "Impact,Charcoal,sans-serif"
}

const Header = () => (
    <div>
        <Link href='/'>
            <a style={linkStyle}>About</a>
        </Link>

        <Link href='/experience'>
            <a style={linkStyle}>Experience</a>
        </Link>

        <Link href='/contact'>
            <a style={linkStyle}>Contact</a>
        </Link>

        <Link href='/blog'>
            <a style={linkStyle}>Blog</a>
        </Link>

    </div>
)

export default Header