import {Navbar} from './Navbar'

export function Layout({children}: any) {
    return (
        <div>
            <Navbar />
            <div className='container p-5 d-flex flex-column align-items-center' style={{
                "maxWidth": "800px"
            }}>{children}</div>
        </div>
    )
}