import Link from "next/link";
import {
  GiPunchBlast, GiSwordman, GiChessKnight, GiCrosshair,
  GiSteeringWheel, GiTrophy, GiTeamIdea, GiScrollUnfurled, GiSpeaker
} from 'react-icons/gi'

const categories = {
  gamingCategory: [
    { title: "Action", desc: "სწრაფი ტემპის თამაშები ბრძოლითა და გამოწვევებით", url: "action", icon: GiPunchBlast, color: "#E8772E" },
    { title: "Role-playing", desc: "შექმენი პერსონაჟი და გამოიკვლიე ვრცელი სამყარო", url: "role-playing", icon: GiSwordman, color: "#7C6FD4" },
    { title: "Strategy", desc: "დაგეგმე, ააშენე და გაიმარჯვე გონებრივი ტაქტიკით", url: "strategy", icon: GiChessKnight, color: "#1FA882" },
    { title: "Shooters", desc: "სროლა პირველი ან მესამე პირის პერსპექტივიდან", url: "shooters", icon: GiCrosshair, color: "#D94040" },
    { title: "Simulator", desc: "რეალური ცხოვრების პროცესების ზუსტი მოდელირება", url: "simulator", icon: GiSteeringWheel, color: "#3A8FD4" },
    { title: "Sports/Racing", desc: "სპორტული შეჯიბრებები და რბოლები", url: "sports-racing", icon: GiTrophy, color: "#F97316" },
    { title: "Multiplayer/Coop", desc: "ითამაშე მეგობრებთან ერთად ან მათ წინააღმდეგ", url: "multiplayer-coop", icon: GiTeamIdea, color: "#D44097" },
  ],
  support: [
    { title: "support-თან კავშირი", desc: "პრობლემა გაქვს? ჩვენი გუნდი დაგეხმარება", url: "contact", icon: GiScrollUnfurled, color: "#D44097" },
    { title: "შენიშვნები", desc: "დატოვე შენი მოსაზრება და გააუმჯობესე პლატფორმა", url: "feedback", icon: GiSpeaker, color: "#F97316" },
  ],
}

const ForumLayout = () => {
  return (
    <div className="min-h-screen bg-[#1a1918] flex justify-center">
      <div className="w-full max-w-350 rounded-lg px-6 py-5 mx-auto">

        {/* Page Title */}
        <h1 className="text-gray-400 text-3xl font-semibold font-sans mb-6 ml-4 text-left">
          Forums
        </h1>

        {/* Support Section */}
        <section className="ml-4 w-full border border-[#3a3835] rounded-sm mb-10">
          <h3 className="text-emerald-700 bg-black px-5 py-3 text-sm font-semibold font-sans">
            Support
          </h3>

          {categories.support.map(({ title, desc, url, icon: Icon, color }) => (
            <Link
              href={`/forum/${url}`}
              key={title}
              className=" h-25 bg-[#242321] hover:bg-[#2d2c2a] border-b border-[#3a3835] last:border-b-0 transition-colors gap-5  flex items-center px-5  group"
            >
              <Icon style={{ backgroundColor: color, borderRadius: '50%', width: 55, height: 55, padding: "5px" }} />
              <div className="flex-1 min-w-0">
                <h4 className="text-[#5ba4cf] font-sans font-bold cursor-pointer transition-colors group-hover:text-sky-300">
                  {title}
                </h4>
                <p className="text-gray-400 text-sm font-sans mt-1 max-w-105 truncate">
                  {desc}
                </p>
              </div>
            </Link>
          ))}
        </section>

        {/* Discussion Section */}
        <section className="ml-4 w-full border border-[#3a3835] rounded-sm">
          <h3 className="text-emerald-700 bg-black px-5 py-3 text-sm font-semibold font-sans">
            DISCUSSION
          </h3>

          {categories.gamingCategory.map(({ title, desc, url, icon: Icon, color }) => (
            <Link
              href={`/forum/${url}`}
              key={title}
              className=" h-25 bg-[#242321] hover:bg-[#2d2c2a] border-b border-[#3a3835] last:border-b-0 transition-colors gap-5 flex items-center px-5 gap-5 group"
            >
              <Icon style={{ backgroundColor: color, borderRadius: '50%', width: 55, height: 55, padding: "5px" }} />
              <div className="flex-1 min-w-0">
                <h4 className="text-sky-500 font-sans font-bold cursor-pointer transition-colors group-hover:text-sky-300">
                  {title}
                </h4>
                <p className="text-gray-400 text-sm font-sans mt-1 max-w-105 truncate">
                  {desc}
                </p>
              </div>
              <div className="flex items-center gap-5 shrink-0">
                <div className="text-center">
                  <p className="text-gray-300 text-sm font-semibold">24</p>
                  <p className="text-gray-500 text-xs uppercase tracking-wider">threads</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-300 text-sm font-semibold">142</p>
                  <p className="text-gray-500 text-xs uppercase tracking-wider">posts</p>
                </div>
           
              </div>
            </Link>
          ))}
        </section>

      </div>
    </div>
  )
}

export default ForumLayout