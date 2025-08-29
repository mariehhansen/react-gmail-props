import Email from './Email'

function Emails({ emails = [], toggleRead, toggleStar, viewEmail }) {
    return (
        <>
            <main className="emails">
                <ul>
                {emails.map((email, index) => (
                    <Email 
                    key={index} 
                    email={email} 
                    toggleRead={toggleRead} 
                    toggleStar={toggleStar}
                    viewEmail={() => viewEmail(email)} />
                ))}
                </ul>
            </main>
        </>
    )
}

export default Emails;