import { Rings } from "react-loader-spinner"
import '../styles/index.css'

export default function LoadingIndicator() {
    return (
        <div id="loading-indicator">
            <Rings color="#293264" height="100px" width="100px" />
        </div>
    )
}