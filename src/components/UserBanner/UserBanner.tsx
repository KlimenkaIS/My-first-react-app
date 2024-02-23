import './UserBanner.css'

export default function UserBanner({initials, name}: {initials:string, name: string}) {
    return ( 
        <div className='user-banner'>
            <p className='user-banner__initials'>{initials}</p>
            <p>{name}</p>
        </div>
     );
}
