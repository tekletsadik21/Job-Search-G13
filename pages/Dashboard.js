import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"

export default function Dashboard() {
    const [error, setError] = useState("")
    const history = useNavigate()

    async function handleLogout() {
        setError("")
        try {
            history.push("/login")
        } catch {
            setError("Failed to log out")
        }
    }

    return (
        <>
            <Card className={"col-lg-3 col-sm-12"}>
                <Card.Body>
                    <h2 className="text-center mb-4">Profile</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {/*<strong>Email:</strong> {currentUser.email}*/}
                    <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
                        Update Profile
                    </Link>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Button variant="link" onClick={handleLogout}>
                    Log Out
                </Button>
            </div>
        </>
    )
}
