import { RiFacebookFill,RiGithubFill,RiTwitterXFill,RiYoutubeFill } from "@remixicon/react"


const Footer = () =>{
return (
    <footer className="max-w-7xl mx—auto">
        <div className="flex flex—col md: flex—row justify-between items—center  border—t—2 py-4 px-4">
            <div className="flex space-x-6 mb-2">
            <a href="https://www.facebook.com"
                target="_blanck"
                rel="noopener noreferrer"
                aria-label="Visist my Facebook page">
            <RiFacebookFill />
            </a>
            <a href="https://www.github.com"
                target="_blanck"
                rel="noopener noreferrer"
                aria-label="Visist my github rep">
            <RiGithubFill />
            </a>
            <a href="https://www.x.com"
                target="_blanck"
                rel="noopener noreferrer"
                aria-label="Visist my x page">
            <RiTwitterXFill />
            </a>
            <a href="https://www.youtube.com"
                target="_blanck"
                rel="noopener noreferrer"
                aria-label="Visist my youtube">
            <RiYoutubeFill />
            </a>
            </div>
            <p className="text-sm">&copy;2025 YR. All Rights Reserved</p>
        </div>
    </footer>
    )
    }


export default Footer