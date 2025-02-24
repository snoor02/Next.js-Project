import SEO from "../components/SEO";
import Image from "next/image";

export default function Home() {
  const footerData = [
    {
      title: "Games",
      links: [
        {
          text: "Arcade Classics",
          url: "https://royalxcasino666.com/?refer_id=10165181725",
        },
        {
          text: "Modern Hits",
          url: "https://royalxcasino666.com/?refer_id=10165181725",
        },
        {
          text: "New Releases",
          url: "https://royalxcasino666.com/?refer_id=10165181725",
        },
      ],
    },
    {
      title: "Support",
      links: [
        {
          text: "FAQ",
          url: "https://royalxcasino666.com/?refer_id=10165181725",
        },
        {
          text: "Contact Us",
          url: "https://royalxcasino666.com/?refer_id=10165181725",
        },
        {
          text: "Live Chat",
          url: "https://royalxcasino666.com/?refer_id=10165181725",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <SEO />
      {/* Modern Sticky Header */}
      <header className="fixed w-full top-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-700/50 shadow-2xl">
        <div className="container mx-auto px-4 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Royal X Casino
          </h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {["Introduction", "Features", "Screenshots", "FAQ"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="relative px-3 py-2 text-gray-300 hover:text-yellow-400 transition-all
                        before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] 
                        before:bg-yellow-400 before:transition-all before:duration-300 hover:before:w-full"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
              <a
                href="https://royalxcasino666.com/?refer_id=10165181725"
                className="ml-4 px-6 py-2 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-full text-black font-bold hover:scale-105 transition-transform shadow-lg hover:shadow-yellow-500/30"
              >
                Play Now
              </a>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 lg:px-8 pt-24">
        {/* Hero Section */}
        <section
          className="relative h-screen flex items-center overflow-hidden"
          data-aos="fade-up"
        >
          {/* Animated Background */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/20.jpg"
              alt="Royal x Casino Game Interface Showing Slot Machines and Live Tables"
              width={1200}
              height={630}
              quality={85}
              className="w-full h-full object-cover absolute inset-0 opacity-30"
              priority
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/90 animate-gradient-flow" />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-6xl mx-auto px-4">
            <div className="text-center">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent animate-text-glow">
                Royal x Casino <br />
                #1 Online Gaming App in Pakistan
                <br />
                <span className="text-2xl lg:text-5xl">
                  2000+ Games • Rs 50,000 Bonus
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto font-light tracking-wide">
                Join millions of players worldwide in the casino gaming
                experience
              </p>

              <div className="flex justify-center gap-6">
                <a
                  href="https://royalxcasino666.com/?refer_id=10165181725"
                  className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-xl text-black font-bold hover:scale-105 transition-transform shadow-2xl hover:shadow-yellow-500/40 flex items-center gap-2 animate-pulse-slow group"
                >
                  <span className="inline-block group-hover:animate-spin">
                    🎮
                  </span>
                  Get Started
                </a>
              </div>
            </div>

            <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-radial from-yellow-500/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-radial from-amber-600/20 to-transparent rounded-full blur-3xl" />
          </div>
        </section>

        {/* Original Introduction Section */}
        <section id="introduction" className="py-16" data-aos="fade-up">
          <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50">
            <h2 className="text-3xl font-bold mb-6 text-yellow-400">
              Welcome to Royal x Casino
            </h2>

            <p className="mb-6 text-gray-300 leading-relaxed">
              Online mobile casinos offer convenience and a wide variety of fun
              games, changing the way people play games. These apps offer fame,
              interaction with other players, and the chance to win real money,
              rewards, and prizes based on player’s luck and skills. Royal x
              Casino is a platform in Pakistan that provides an easy, exciting,
              and enjoyable gaming experience.
              <br />
              It offers features like high-quality games, a flexible betting
              system, and smooth performance on Android devices. This app allows
              users to enjoy both gaming and gambling on a single platform. It
              is a large platform that offers experience exactly like a
              land-based casino. You can experience it for free and join
              thousands of active users. With positive reviews, it is gaining
              trust as a reliable platform. Download the latest version of Royal
              x Casino and experience everything it has to offer!
            </p>
            <Image
              src="/main.jpg"
              alt="Royal x Casino Mobile App Interface Showing Live Games and Bonuses"
              width={1200} // adjust based on your image ratio
              height={675} // adjust based on your image ratio
              className="w-full h-auto rounded-xl shadow-2xl mb-6"
            />
            <p className="mb-6 text-gray-300 leading-relaxed">
              Welcome, casino lovers! Get ready to enjoy exciting games and
              chances to win on our platform. We offer 200+ different game
              categories and guarantee hours of enjoyable entertainment. With
              strong security, responsive customer support, and smooth
              withdrawals, we're the preferred choice for players.
              <br />
              <br />
              Downloading the Royal x Casino APK is simple, quick, and easy.
              Create an account and become a registered member in a few simple
              steps. We have everything you need, whether you want to play free
              games or put bets. To further improve your gaming experience, we
              provide a large collection of bonuses and cashback deals. We have
              got your back with a safe and trustworthy environment for
              everyone.
              <br />
              <br />
              Ready to take your gaming experience to the next level Forget
              about dull, old games and get ready for some adventure with Royal
              x Casino on your Android device. Just remember, you're in control
              – the outcome is up to you. Have fun but remember to play
              responsibly!
            </p>

            <p className="mb-6 text-gray-300 leading-relaxed">
              <strong>
                Why 500,000+ Pakistani Players Choose Royal x Casino:
              </strong>
              <br />
              • Highest RTP Rates in Pakistan (97.8%)
              <br />
              • Fastest Withdrawals - 2 Minutes to JazzCash
              <br />
              • 24/7 Urdu Support Team
              <br />• PKR Currency & Local Payment Methods
            </p>
          </div>
        </section>
        {/* App Info Table Section */}
        <section className="py-16" data-aos="fade-up">
          <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50 shadow-xl">
            <h2 className="text-3xl font-bold mb-8 text-yellow-400 text-center">
              App Information
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <tbody className="divide-y divide-gray-700/50">
                  {[
                    ["App Name", "Royal x Casino"],
                    ["New Version", "v2.30.2"],
                    ["Size", "8.2 MB"],
                    ["Official Site & Developer", "royalxcasino"],
                    ["Requires", "Android 5.0 & Plus"],
                    ["Country", "Pakistan"],
                    ["Price", "Free"],
                  ].map(([label, value], index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-700/20 transition-colors"
                    >
                      <td className="py-4 px-4 font-bold text-gray-300">
                        {label}
                      </td>
                      <td className="py-4 px-4 text-gray-400">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-8 text-center">
              <a
                href="https://royalxcasino666.com/?refer_id=10165181725"
                className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-lg 
        text-black font-bold hover:scale-105 transition-transform shadow-lg hover:shadow-yellow-500/30"
              >
                Download Now
              </a>
            </div>
          </div>
        </section>
        {/* Modern Features Grid */}
        <section
          className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          data-aos="fade-up"
        >
          {[
            {
              title: "2000+ Games",
              text: "Slots, Live Casino, Poker & More",
              color: "from-purple-500 to-blue-500",
            },
            {
              title: "24/7 Support",
              text: "Instant Help Any Time",
              color: "from-green-400 to-cyan-500",
            },
            {
              title: "Secure Payments",
              text: "100% Safe Transactions",
              color: "from-pink-500 to-red-500",
            },
            {
              title: "Big Bonuses",
              text: "Up to Rs 50,000 Welcome Bonus",
              color: "from-yellow-400 to-amber-500",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700/50 hover:border-yellow-500/30
              transition-all hover:-translate-y-2 shadow-xl hover:shadow-yellow-500/10"
            >
              <div
                className={`w-12 h-12 mb-4 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center`}
              >
                <span className="text-2xl">🎰</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.text}</p>
            </div>
          ))}
        </section>

        {/* Original Features Section */}
        <section id="features" className="py-16" data-aos="fade-up">
          <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50">
            <h2 className="text-3xl font-bold mb-6 text-yellow-400">
              Amazing Features
            </h2>

            <ul className="list-disc ml-6 text-gray-300 mb-6 space-y-4">
              <li>Intuitive and modern design</li>
              <li>High performance and responsive layouts</li>
              <li>Customizable components for a personal touch</li>
              <li>Secure and reliable operation</li>
            </ul>
            <Image
              src="/9.jpg"
              alt="Royal x Casino Mobile App Interface Showing Live Games and Bonuses"
              width={1200} // adjust these numbers as necessary
              height={675} // adjust these numbers as necessary
              className="w-full h-auto rounded-xl shadow-2xl"
            />
            <p className="mb-6 mt-6 text-gray-300 leading-relaxed">
              It has many amazing features, functions, and services, making it a
              secure platform for a careful gambler. Let us take a deeper look
              at each one.
            </p>
            <h3 className="text-2xl font-bold mb-6 text-yellow-400">
              Tons of Games
            </h3>
            <p className="mb-6 mt-6 text-gray-300 leading-relaxed">
              To attract the largest number of users, a casino app must offer a
              wide range of interesting and fun games.
              <br />
              Royal x Casino presents the following game categories.
            </p>
            <ul className="list-disc ml-6 text-gray-300 mb-6 space-y-4">
              <li>
                <b>Casino:</b> Digital versions of games found in physical
                casinos. Crash, Dragon & Tiger, Cricket Battle, Roulette, Zoo
                Roulette, 7 Up Down, Sic Bo, Andar Bahar, Best of Five,
                Baccarat, Crash II, Toss A Coin, Mythical Animals, Horse Racing,
                Sabong, Wingo, Red vs Black, Jhandi Munda, Direction Bounty,
                Color Game, etc.
              </li>
              <li>
                <b>Casual:</b> These are games that are easy for everyone to
                play and enjoy because they don’t require complex or high-level
                skills. Some examples of these casual games include Fishing,
                Limbo, Mines, Fishdom, Plinko, and others.
              </li>
              <li>
                <b>Slots:</b> Involve spinning reels with different symbols and
                trying to match them to win prizes. Popular slot games include
                Money Mania, Rising Fortunes, Jungle Tiger, Mr. Frankenstein,
                Rampage Buffalo, God of Wealth, Mermaid’s Dance, Phoenix, 777
                Fruit, 88 Fortunes, Zeus Power, Fruit Mary, Fortune Tiger, Land
                of Gems, Crazy Elves, Dragon Tiger, and more.
              </li>
              <li>
                <b>Skill:</b> To win these games, you need a certain level of
                skill and the right strategies. Some examples include Quick
                Ludo, Teen Patti, Point Rummy, Andar Bahar Multiplayer,
                Blackjack, Crazy Ludo, Domino, Pool Rummy, Poker, and more.
              </li>
            </ul>
            <h3 className="text-2xl font-bold mb-6 text-yellow-400">
              Earn Money
            </h3>
            <p className="mb-6 mt-6 text-gray-300 leading-relaxed">
              If you're a skilled gamer, you can earn cash on the Royal x Casino
              app, making it a money-making platform. Players can deposit funds
              into their accounts, choose a game of their choice, and play to
              win. In the end, they either win or lose money.
            </p>
            <h3 className="text-2xl font-bold mb-6 text-yellow-400">
              High Security
            </h3>
            <p className="mb-6 mt-6 text-gray-300 leading-relaxed">
              The Royal x Casino app ensures a safe gaming experience with its
              strong and high-level security system. Features like RNG
              Certification, SSL Security, Financial Protection, Fair Gaming,
              and Fraud Detection make it a secure and reliable platform for
              users.
            </p>
            <h3 className="text-2xl font-bold mb-6 text-yellow-400">
              Instant Withdrawals
            </h3>
            <p className="mb-6 mt-6 text-gray-300 leading-relaxed">
              The app processes your transactions quickly, so your funds are
              transferred within minutes. Without any problem you can easily
              withdraw your earnings through JazzCash, Easypaisa, or your bank
              account. Depositing money is just as simple, making everything
              easy and smooth.
            </p>

            <h3 className="text-2xl font-bold mb-6 text-yellow-400">
              24×7 Customer Support
            </h3>
            <p className="mb-6 mt-6 text-gray-300 leading-relaxed">
              Royal x Casino offers excellent customer service through a
              friendly, professional team always ready to help. If you have any
              issues with Recharge, Withdrawals, Account Problems, or Referrals,
              our team is here to solve them quickly and easily, making sure you
              have a smooth and trouble-free experience.
            </p>

            <h3 className="text-2xl font-bold mb-6 text-yellow-400">
              Social Links
            </h3>
            <p className="mb-6 mt-6 text-gray-300 leading-relaxed">
              Royal x Casino is active on multiple social media platforms and
              announces random prizes for their Telegram users. To stay updated
              with the latest news and announcements, make sure to join their
              YouTube channel.
            </p>

            <h2 className="text-3xl font-bold mb-6 text-yellow-400">
              Offers & Rewards
            </h2>
            <p className="mb-6 mt-6 text-gray-300 leading-relaxed">
              Players can enjoy a variety of free prizes on special occasions.
              For example:
            </p>
            <ul className="list-disc ml-6 text-gray-300 mb-6 space-y-4">
              <li>
                By logging in to the app regularly you can Win a daily bonus.
              </li>
              <li>Loyal players get weekly bonuses.</li>
              <li>New users are welcomed with a registration bonus.</li>
              <li>On becoming VIP member, enjoy more benefits.</li>
              <li>Get a 50% bonus on your first recharge.</li>
              <li>Get a 10% reward when you refer someone to the app</li>
              <li>By Inviting friends, you can get up to 4770 rupees</li>
            </ul>
          </div>
        </section>

        <section className="py-12 bg-gray-900">
          <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {["SSL Secure", "24/7 Support", "PGA Licensed", "Fair RNG"].map(
              (text) => (
                <div key={text} className="flex flex-col items-center">
                  <svg
                    className="h-12 w-12 text-yellow-400 mb-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-gray-300 text-center">{text}</span>
                </div>
              )
            )}
          </div>
        </section>

        {/* Gallery Section */}
        {/* Gallery Section */}
        <section id="screenshots" className="py-16" data-aos="fade-up">
          <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50">
            <h2 className="text-3xl font-bold mb-8 text-yellow-400 text-center">
              Screenshots
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {["/3.jpg", "/6.jpg", "/17.jpg"].map((src, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl hover:shadow-2xl hover:shadow-yellow-500/20"
                >
                  <Image
                    src={src}
                    alt={`Royal x Casino Screenshot ${index + 1}`}
                    width={600} // adjust as needed
                    height={256} // h-64 equals roughly 256px
                    style={{ width: "auto", height: "auto" }} // Maintain aspect ratio
                    className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div
                    className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity
            flex items-center justify-center"
                  >
                    <span className="text-white text-lg font-bold">
                      View More
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Original Four-Column Info Boxes */}
        <section className="py-16" data-aos="fade-up">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: "National-Level Website Security",
                content:
                  "RNG-certified gaming with fairness, transparency, and guaranteed financial security.",
              },
              {
                title: "Responsible Gaming",
                content:
                  "Top-notch fraud detection, game fairness, and robust security encryption.",
              },
              {
                title: "Top Deals & Rewards",
                content:
                  "Register for free cash, invite friends, and unlock VIP rewards.",
              },
              {
                title: "24x7 Customer Support",
                content:
                  "Efficient support, professional team, dedicated to solving customer problems.",
              },
            ].map((box, index) => (
              <div
                key={index}
                className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 hover:-translate-y-2 transition-transform"
              >
                <h3 className="text-xl font-bold text-yellow-400 mb-4">
                  {box.title}
                </h3>
                <p className="text-gray-300">{box.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-16" data-aos="fade-up">
          <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50">
            <h2 className="text-3xl font-bold mb-8 text-yellow-400 text-center">
              Why Choose Royal X Casino Game?
            </h2>
            <p className="mb-6 text-gray-300 leading-relaxed max-w-2xl mx-auto text-center">
              Enjoy popular games like Teen Patti, Aviator, and Baccarat with
              real money rewards. Benefit from daily bonuses, secure payments,
              and a user-friendly interface for seamless gameplay, catering to
              both beginners and experienced players.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {[
                {
                  title: "Variety of Games",
                  content:
                    "Enjoy top games like Teen Patti, Aviator, Baccarat, and more!",
                },
                {
                  title: "Real Money Rewards",
                  content:
                    "Win real money daily with rewards, cash bonuses, and promotions!",
                },
                {
                  title: "Easy Navigation",
                  content:
                    "Experience a smooth user interface that’s perfect for both new and seasoned players.",
                },
              ].map((card, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-6 rounded-xl hover:-translate-y-2 transition-transform"
                >
                  <h3 className="text-xl font-bold text-yellow-400 mb-4">
                    {card.title}
                  </h3>
                  <p className="text-gray-300">{card.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="how to download" className="py-16" data-aos="fade-up">
          <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50">
            <h2 className="text-3xl font-bold mb-6 text-yellow-400">
              How to download & install Royal x Casino APK?
            </h2>

            <p className="mb-6 mt-6 text-gray-300 leading-relaxed">
              Royal x Casino app currently supports Android devices such as
              smartphones and tablets, so you can use it without any difficulty.
              The process for downloading and installing the Royal x Casino app
              is the same as any other APK.
            </p>
            <p className="mb-6 mt-6 text-gray-300 leading-relaxed">
              Here’s how to get started with the Royal x Casino app:
            </p>
            <ul className="list-disc ml-6 text-gray-300 mb-6 space-y-4">
              <li>
                Click the download button on this page. The download will take
                just a few seconds.
              </li>
              <li>
                Once it is downloaded, find the APK file on your phone and start
                the installation.
              </li>
              <li>
                Make sure that your phone allows installations from unknown
                sources. If this setting is not enabled, you would not be able
                to continue.
              </li>
              <li>
                Once you have enabled the setting, continue the installation
                process by granting any necessary permissions.
              </li>
              <li>
                After installation is complete, the app is ready to use! Go
                ahead and start the registration process.
              </li>
            </ul>

            <h2 className="text-3xl font-bold mb-6 text-yellow-400">
              How to login & register on Royal x Casino app?
            </h2>

            <ul className="list-disc ml-6 text-gray-300 mb-6 space-y-4">
              <li>
                First, you need to become a registered player by creating an
                account.
              </li>
              <li>
                To register for the app, simply click on the Registration icon
                and provide the necessary information.
              </li>
              <li>
                You will be required to provide various personal information
                such as username, password, email, and phone number.
              </li>
              <li>If needed for KYC, provide your CNIC</li>
              <li>
                After completing the registration, you’ll receive a welcome
                bonus.
              </li>
              <li>
                Next time, simply log in by entering your username and password.
              </li>
            </ul>
          </div>
        </section>

        <section className="py-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Trending Games
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Game Cards */}
            {[1, 2, 3].map((game) => (
              <div
                key={game}
                className="relative group overflow-hidden rounded-2xl hover:shadow-2xl hover:shadow-yellow-500/20 h-full"
              >
                {/* Image Container with Aspect Ratio */}
                <div className="relative pt-[56.25%]">
                  {" "}
                  {/* 16:9 aspect ratio */}
                  <Image
                    src={`/g${game}.png`}
                    alt={
                      game === 1
                        ? "Royal x Casino Game Rising Fortune"
                        : game === 2
                        ? "Royal x Casino Game Dice"
                        : "Royal x Casino Game Roulette"
                    }
                    width={600}
                    height={337}
                    className="absolute top-0 left-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                  <h3 className="text-xl font-bold">
                    {game === 1 && "Rising Fortune"}
                    {game === 2 && "Dice"}
                    {game === 3 && "Roulette"}
                  </h3>
                  <a
                    href="https://royalxcasino666.com/?refer_id=10165181725"
                    className="mt-2 px-4 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400"
                  >
                    Play Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="how to deposit" className="py-16" data-aos="fade-up">
          <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50">
            <h2 className="text-3xl font-bold mb-6 text-yellow-400">
              How to Deposit Money?
            </h2>

            <p className="mb-6 mt-6 text-gray-300 leading-relaxed">
              Follow the steps below to deposit cash into your new account:
            </p>

            <ul className="list-disc ml-6 text-gray-300 mb-6 space-y-4">
              <li>
                Click the Wallet icon at the bottom of the home screen menu.
              </li>
              <li>
                Choose a deposit method and enter the quantity you want as your
                deposit amount.
              </li>
              <li>
                Insert your wallet or bank account information, including your
                CNIC if needed.
              </li>
              <li>
                Make sure all the information you enter is correct; incorrect
                information may result in permanent cancellation.
              </li>
              <li>
                CNIC is only required if you are depositing through a wallet.
              </li>
              <li>
                Confirm the payment using your mobile wallet or banking app.
              </li>
            </ul>

            <h2 className="text-3xl font-bold mb-6 text-yellow-400">
              How to Withdraw Cash?
            </h2>
            <p className="mb-6 mt-6 text-gray-300 leading-relaxed">
              The withdrawal process is simple and works similarly to depositing
              method. Follow the following steps:
            </p>

            <ul className="list-disc ml-6 text-gray-300 mb-6 space-y-4">
              <li>
                Open the Me or Wallet section and select the Withdraw option.
              </li>
              <li>
                For successful completion of the KYC (verification) process,
                provide your full name and any further information.
              </li>
              <li>
                Choose the amount you wish to withdraw and your desired payment
                method (bank account, mobile wallet, or cryptocurrency account).
              </li>
              <li>
                Your request will be completed when you tap Submit. Your money
                will be sent soon.
              </li>
            </ul>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16" data-aos="fade-up">
          <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50">
            <h2 className="text-3xl font-bold mb-8 text-yellow-400 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  question: "Is Royal x Casino hack/MOD available?",
                  answer:
                    "No, there aren't any official hack or MOD versions available at Royal X Casino. This page only includes the original and official Android app. It is very dangerous to download a MOD or hacked version from unknown websites. You may lose your money, progress, or even account security. Additionally, these versions may contain viruses resulting in a bad gaming experience or even account bans. Always download the app from a trusted sources to ensure a safe and fair gaming experience.",
                },
                {
                  question: "Royal X Casino download from Play Store or not?",
                  answer:
                    "No, the Royal x Casino app is not available on any app store. You can download it for free from this website only.",
                },
                {
                  question: "Can I download Royal x Casino for PC & iOS?",
                  answer:
                    "Royal x Casino does not support PC, iOS, or any other operating system because it is only made for Android devices. To get the greatest gaming experience, utilise an Android smartphone or tablet.",
                },
                {
                  question: "What is Royal x Casino redeem code?",
                  answer:
                    "Today's Royal x Casino redemption code is 14d772zjdco, which allows users to collect rewards or free chips without making a deposit. However, due to the high usage by multiple players at the same time, this code may not always function. Stay tuned to this official page to receive the most recent coupons and maximise your gaming rewards.",
                },
                {
                  question: "How to update Royal x Casino?",
                  answer:
                    "Updating Royal x Casino is simple because it is meant to update automatically as you start it. Manual updates are not required. This guarantees that gamers always have the most recent version, which includes new features, bug fixes, and security improvements.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-gray-900/30 p-6 rounded-xl hover:bg-gray-900/50 transition-colors"
                >
                  <h3 className="text-xl font-bold text-gray-200 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
          {/* JSON-LD Structured Data */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is Royal x Casino hack/MOD available?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No, there aren't any official hack or MOD versions available at Royal X Casino. This page only includes the original and official Android app. It is very dangerous to download a MOD or hacked version from unknown websites. You may lose your money, progress, or even account security. Additionally, these versions may contain viruses resulting in a bad gaming experience or even account bans. Always download the app from a trusted sources to ensure a safe and fair gaming experience.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Royal X Casino download from Play Store or not?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No, the Royal x Casino app is not available on any app store. You can download it for free from this website only.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I download Royal x Casino for PC & iOS?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Royal x Casino does not support PC, iOS, or any other operating system because it is only made for Android devices. To get the greatest gaming experience, utilise an Android smartphone or tablet.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is Royal x Casino redeem code?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Today's Royal x Casino redemption code is 14d772zjdco, which allows users to collect rewards or free chips without making a deposit. However, due to the high usage by multiple players at the same time, this code may not always function. Stay tuned to this official page to receive the most recent coupons and maximise your gaming rewards.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How to update Royal x Casino?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Updating Royal x Casino is simple because it is meant to update automatically as you start it. Manual updates are not required. This guarantees that gamers always have the most recent version, which includes new features, bug fixes, and security improvements.",
                  },
                },
              ],
            })}
          </script>
        </section>

        <section id="Conclusion" className="py-16" data-aos="fade-up">
          <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50">
            <h2 className="text-3xl font-bold mb-6 text-yellow-400">
              Conclusion:
            </h2>

            <p className="mb-6 mt-6 text-gray-300 leading-relaxed">
              Royal x Casino is a complete virtual casino that provides an
              enjoyable gaming experience to gamers. It offers a wide variety of
              games, including slots, poker, skill-based games, casino classics,
              and casual games. Every person can find something they enjoy,
              whether they prefer simple and entertaining challenges or complex
              challenging card games. This application gives an interesting and
              excellent experience due to its attractive design and smooth
              gameplay. Furthermore, its certificates and licenses make it a
              safe and trusted platform for online gaming.
              <br />
              However, it is important to understand that playing at Royal x
              Casino does not guarantee profits. In every casino game, some
              players win, and others lose their money. This is the nature of
              gambling. Be prepared to win and lose and always play responsibly.
              Treat this app as a source of fun rather than a means of earning
              money.
              <br />
              Before you make any bets, be sure you completely understand the
              platform. Read the app's terms and conditions, FAQs, and
              disclaimer section. This information will help you make wise
              choices and maximize your game experience while staying within
              safe limits.
            </p>
          </div>
        </section>
        {/* Download CTA */}
        <section className="py-16 text-center" data-aos="fade-up">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl shadow-2xl border border-gray-700/50">
            <h2 className="text-4xl font-bold mb-4">Play Anywhere, Anytime</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Download our mobile app and take your gaming experience to the
              next level
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="https://royalxcasino666.com/?refer_id=10165181725"
                className="px-8 py-4 bg-gray-700 hover:bg-gray-600 rounded-xl flex items-center gap-3
                transition-all hover:-translate-y-1"
              >
                <span className="text-3xl">📱</span>
                <div className="text-left">
                  <p className="text-sm text-gray-300">Get it on</p>
                  <p className="font-bold">Google Play</p>
                </div>
              </a>
              <a
                href="https://royalxcasino666.com/?refer_id=10165181725"
                className="px-8 py-4 bg-gray-700 hover:bg-gray-600 rounded-xl flex items-center gap-3
                transition-all hover:-translate-y-1"
              >
                <span className="text-3xl">🍎</span>
                <div className="text-left">
                  <p className="text-sm text-gray-300">Download on</p>
                  <p className="font-bold">App Store</p>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Animated Footer */}
      <footer className="bg-gray-900/80 border-t border-gray-700/50 mt-20">
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Royal X Casino</h3>
              <p className="text-gray-400">
                Premium online gaming experience since 2020
              </p>
            </div>
            {footerData.map((section) => (
              <div key={section.title}>
                <h4 className="text-gray-300 font-bold mb-4">
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.links.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.url}
                        className="text-gray-400 hover:text-yellow-400 transition-colors"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-700/50 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 Royal X Casino. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
export async function generateStaticParams() {
  return [{}];
}

export const revalidate = 3600; // ISR
