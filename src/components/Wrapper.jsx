import Header from './Header';

export default function Wrapper({ children }) {
    return (
        <div className='wrapper'>
            <Header />
            <div className='content'>{children}</div>
        </div>
    );
}
