import Navigation from "./Navigation";
import TopBar from "./TopBar";

export default function Header() {
    return (
        <div className="w-full shadow-lg">
            <TopBar
                openingHours="Mon - Fri: 9am - 5pm"
                phoneNumber="123-456-7890"
            />
            <Navigation logoSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/cd01741af0d7d10fe52dd79bad621aeca9a5afa12a2e6b50ebd1b2d28e2c40d5?apiKey=e34b0bbc442149bfa463a424862e236a&" />
        </div>
    );
}
