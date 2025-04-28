import {Link} from "react-router"
import { Separator } from "./ui/separator"
import { NavigationMenuContent, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu"
import { NavigationMenu } from "./ui/navigation-menu"
import { NavigationMenuItem } from "./ui/navigation-menu"

const menus = [
    {
        name:"Products",
        to:"/products",
        items:[
            {
                name:"Leaderboards",
                description:"See the top performers in your community",
                to:"/products/leaderboards"
            },
            {
                name:"Categories",
                description:"See the top performers in your community",
                to:"/products/categories"
            },
            {
                name:"Search",
                description:"Search for a product",
                to:"/products/search"
            },
            {
                name:"Submit a Product",
                description:"Submit a product to our community",
                to:"/products/submit"
            },

            {
                name:"Promote",
                description:"Submit a product to our community",
                to:"/products/promote"
            }
        ]
    },
    {
        name:"Jobs",
        to:"/jobs",
        items:[
            {
                name:"Remote Jobs",
                description:"Find a remote job in our community",
                to:"/jobs?location=remote"
            },
            {
                name:"full-time jobs",
                description:"Find a full-time job in our community",
                to:"/jobs?type=full-time"
            },
            {
                name:"Freelance Jobs",
                description:"Find a Freelance job in our community",
                to:"/jobs?type=part-time"
            },

            {
                name:"Internships",
                description:"Find a Internships job in our community",
                to:"/jobs?type=Internship"
            },
            {
                name:"Submit a Job",
                description:"Submit a job to our community",
                to:"/jobs/submit"
            },
        ]
    },
    {
        name:"community",
        to:"/community",
        items:[
            {
                name:"All Posts",
                description:"See all posts in our community",
                to:"/community"
            },
            {
                name:"Top Posts",
                description:"Join the top posts in our community",
                to:"/community?sort=top"
            },
            {
                name:"New Posts",
                description:"Join the new posts in our community",
                to:"/community?sort=new"
            },
            {
                name:"Create a Post",
                description:"Create a post to our community",
                to:"/community/create"
            },
        ]
    },
    {
        name:"IdeasGPT",
        to:"/ideas"
    },
    {
        name:"Teams",
        to:"/teams",
        items:[
            {
                name:"All Teams",
                description:"See all teams in our community",
                to:"/teams"
            },
            {
                name:"Create a Team",
                description:"Create a team to our community",
                to:"/teams/create"
            },
        ]
    }
]

export default function Navigation() {
    return (
        <nav className="flex px-20 h-16 items-center justify-between backdrop-blur fixed
        top-0 left-0 right-0 z-50 bg-background/50">
            <div className="flex items-center">
                <Link to="/" className="font-bold tracking-tight text-lg">
                    WeMake
                </Link>
                <Separator orientation="vertical" className="h-6 mx-4"/>
                <NavigationMenu>
                    <NavigationMenuList>
                        {menus.map((menu => (
                            <NavigationMenuItem key={menu.name}>
                                <NavigationMenuTrigger>{menu.name}</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    {
                                        menu.items?.map((item) => (
                                            <NavigationMenuItem key={item.name}>
                                                <Link to={item.to}>{item.name}</Link>
                                            </NavigationMenuItem>
                                        ))
                                    }
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        )))}
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </nav>
    )
}       
