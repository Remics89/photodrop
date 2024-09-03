import { useSession } from "next-auth/react";

export default function Admin() {
    const {status} = useSession({
        required: true, onUnauthenticated() {
            return {
                user: null,
                authenticated: false
            }
        }
    })
}