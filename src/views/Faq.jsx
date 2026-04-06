const faqItems = [
    {
        question: "What landscaping services does Home Scape offer in El Paso?",
        answer:
            "Home Scape provides landscape design, irrigation work, hardscaping, lawn maintenance, and general outdoor property improvements for residential and commercial properties in El Paso.",
    },
    {
        question: "Do you handle sprinkler and irrigation repairs?",
        answer:
            "Yes. We handle irrigation installation, sprinkler troubleshooting, repairs, and upgrades to help El Paso properties stay efficient in a dry climate.",
    },
    {
        question: "Can you work on both homes and commercial properties?",
        answer:
            "Yes. We work on local homes as well as commercial properties, with services scaled to the needs of each project.",
    },
    {
        question: "How do I request a landscaping quote in El Paso?",
        answer:
            "You can request a quote by using the contact form on the homepage or by calling Home Scape directly at (915) 433-7668.",
    },
    {
        question: "Do you offer ongoing lawn maintenance?",
        answer:
            "Yes. Home Scape offers recurring lawn maintenance and property care for clients who want reliable year-round upkeep.",
    },
    {
        question: "Why is irrigation important for El Paso landscaping?",
        answer:
            "El Paso landscaping requires efficient water management because of the local climate. A properly designed irrigation system helps protect plants, reduce waste, and keep outdoor spaces healthier over time.",
    },
    {
        question: "Do you install new landscaping for recently built homes?",
        answer:
            "Yes. We can help homeowners who are starting with a blank yard by planning layout, irrigation, hardscape elements, and planting improvements that fit the property and budget.",
    },
    {
        question: "Can you improve curb appeal for a home before it goes on the market?",
        answer:
            "Yes. Many clients ask for cleanup, lawn care, irrigation repairs, and front-yard improvements before listing a property. These projects are often focused on presentation, maintenance, and first impressions.",
    },
    {
        question: "Do you help with low-maintenance landscaping ideas?",
        answer:
            "Yes. Low-maintenance landscaping is a common goal in El Paso. We can recommend layouts, materials, and irrigation solutions that reduce upkeep while keeping the property attractive.",
    },
    {
        question: "What kinds of hardscaping projects do you handle?",
        answer:
            "Home Scape handles hardscaping improvements such as walkways, edging, decorative features, and other structural outdoor upgrades that add function and visual definition to a property.",
    },
    {
        question: "How often should lawn maintenance be scheduled?",
        answer:
            "That depends on the property, season, and goals of the owner. Some clients need regular recurring visits, while others need occasional cleanup or maintenance support tied to irrigation and landscape condition.",
    },
    {
        question: "Can you help fix problem areas in a yard?",
        answer:
            "Yes. We often work on outdoor areas with drainage concerns, weak grass coverage, neglected beds, worn curb appeal, or irrigation performance issues that need a practical improvement plan.",
    },
    {
        question: "Do you work with property managers and business owners?",
        answer:
            "Yes. Home Scape works with residential clients as well as commercial properties that need reliable outdoor maintenance, irrigation work, or improvement projects.",
    },
    {
        question: "What should I prepare before asking for a landscaping estimate?",
        answer:
            "It helps to know the type of work you want, the main problem you are trying to solve, and any timing or budget priorities. Even if the scope is not fully defined, we can still start with the basics and talk through the project.",
    },
    {
        question: "Do you offer complete outdoor transformations or only smaller jobs?",
        answer:
            "Home Scape works on a range of projects, from focused repairs and maintenance to larger outdoor improvements. The right approach depends on the condition of the property and what the client wants to achieve.",
    },
    {
        question: "Why choose a local El Paso landscaping company?",
        answer:
            "A local landscaping company is more familiar with El Paso climate conditions, irrigation demands, property styles, and common maintenance challenges. That local context matters when planning outdoor work that should last.",
    },
    {
        question: "Do you provide landscaping help for front yards and backyards?",
        answer:
            "Yes. Home Scape works on both front-yard and backyard landscaping projects, whether the goal is curb appeal, better function, lower maintenance, or a more complete outdoor upgrade.",
    },
    {
        question: "Can you update older landscaping that no longer looks good?",
        answer:
            "Yes. We can refresh outdated landscaping by improving layout, cleaning up problem areas, updating irrigation, and making the property look more intentional and easier to maintain.",
    },
    {
        question: "Do you help clients who are not sure what their yard needs yet?",
        answer:
            "Yes. Many property owners start with a general idea instead of a finished plan. We can look at the space, identify issues, and recommend practical next steps based on the property and goals.",
    },
    {
        question: "Can you improve water efficiency in an existing yard?",
        answer:
            "Yes. Irrigation adjustments, repairs, and smarter system planning can help reduce waste and improve how water is distributed across the landscape.",
    },
    {
        question: "Is professional landscaping worth it for smaller properties?",
        answer:
            "Yes. Smaller properties can still benefit from better irrigation, cleaner layout, stronger curb appeal, and lower-maintenance design choices that make the space feel more finished.",
    },
    {
        question: "Do you offer cleanup work for neglected outdoor areas?",
        answer:
            "Yes. We can help restore neglected outdoor spaces by addressing overgrowth, worn visual areas, irrigation issues, and general landscape condition so the property looks cared for again.",
    },
    {
        question: "Can landscaping improvements increase property appeal?",
        answer:
            "Well-planned landscaping can improve how a property looks, feels, and functions. For many owners, that means stronger curb appeal, a cleaner presentation, and a better first impression.",
    },
    {
        question: "Do you work on irrigation problems that cause dry or overwatered spots?",
        answer:
            "Yes. Uneven watering is a common issue. We can inspect irrigation performance and make repairs or adjustments to help improve coverage and reduce stress on the landscape.",
    },
    {
        question: "Can Home Scape help with landscaping for investment or rental properties?",
        answer:
            "Yes. Rental and investment properties often need dependable maintenance, cleanup, and improvements that raise presentation without creating unnecessary upkeep.",
    },
    {
        question: "What is the best way to start a landscaping project with Home Scape?",
        answer:
            "The best first step is to call or send a message with a short description of the property and the kind of help you need. From there, we can talk through the project and the right next step.",
    },
];

const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
        },
    })),
};

const Faq = () => {
    return (
        <div className="min-h-screen text-[#171717]" style={{ backgroundColor: "#f5f1e8" }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
            />
            <header className="border-b border-black/10 px-6 py-5 text-white md:px-12" style={{ backgroundColor: "#1f261d" }}>
                <div className="mx-auto flex max-w-[1180px] items-center justify-between">
                    <a href="/" className="text-2xl font-semibold tracking-tight">
                        Home <span className="font-bold text-[#9ed174]">Scape</span>
                    </a>
                    <a
                        href="/"
                        className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold transition hover:bg-white hover:text-black"
                    >
                        Return Home
                    </a>
                </div>
            </header>

            <main>
                <section className="px-6 pb-20 pt-16 text-white md:px-12 md:pb-28 md:pt-24" style={{ backgroundColor: "#1b2118" }}>
                    <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
                        <div className="max-w-4xl">
                            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#c6ee9f]">El Paso Landscaping FAQ</p>
                            <h1 className="mt-5 text-5xl font-bold leading-[0.95] md:text-7xl">
                                Clear answers for landscaping, irrigation, and lawn care in El Paso
                            </h1>
                            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/92 md:text-xl">
                                This FAQ page is built to answer the questions homeowners, property managers, and business owners
                                commonly ask before hiring a landscaping company in El Paso, Texas. It covers design, hardscaping,
                                sprinkler repair, lawn maintenance, and what to expect when requesting a quote.
                            </p>
                        </div>

                        <div
                            className="rounded-[28px] border border-white/15 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-sm"
                            style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                        >
                            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#c6ee9f]">Quick Contact</p>
                            <h2 className="mt-4 text-3xl font-bold leading-tight">Need help with your property now?</h2>
                            <p className="mt-4 text-base leading-7 text-white/90">
                                Call Home Scape at (915) 433-7668 or go back to the main site to send a quote request.
                            </p>
                            <div className="mt-8 flex flex-col gap-4">
                                <a
                                    href="tel:915-433-7668"
                                    className="inline-flex items-center justify-center rounded-full bg-[#2AB838] px-6 py-3 font-bold text-white transition hover:bg-[#23992f]"
                                >
                                    Call (915) 433-7668
                                </a>
                                <a
                                    href="/#contact"
                                    className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 font-bold text-white transition hover:bg-white hover:text-black"
                                >
                                    Open Contact Form
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="px-6 py-16 md:px-12 md:py-20">
                    <div className="mx-auto max-w-[1180px]">
                        <div className="mb-10 max-w-3xl">
                            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#2f6a2b]">Frequently Asked Questions</p>
                            <h2 className="mt-3 text-4xl font-bold leading-tight md:text-5xl">
                                Professional answers to the questions people actually ask before hiring a landscaper
                            </h2>
                        </div>

                        <div className="grid gap-6">
                            {faqItems.map((item, index) => (
                                <article
                                    key={item.question}
                                    className="rounded-[24px] border border-black/10 bg-white p-7 shadow-[0_14px_40px_rgba(0,0,0,0.05)] md:p-8"
                                >
                                    <div className="flex items-start gap-5">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eaf1e7] text-sm font-bold text-[#2f6a2b]">
                                            {index + 1}
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold leading-snug md:text-3xl">{item.question}</h3>
                                            <p className="mt-4 max-w-4xl text-base leading-8 text-[#3d4144] md:text-lg">
                                                {item.answer}
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="px-6 pb-20 md:px-12 md:pb-24">
                    <div
                        className="mx-auto grid max-w-[1180px] gap-8 rounded-[32px] p-8 md:grid-cols-2 md:p-12"
                        style={{ backgroundColor: "#e7ecdf" }}
                    >
                        <div>
                            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#2f6a2b]">Why This Page Matters</p>
                            <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
                                Landscaping decisions are easier when the information is direct
                            </h2>
                            <p className="mt-5 text-base leading-8 text-[#3d4144] md:text-lg">
                                Many landscaping pages are vague. This FAQ is meant to be more useful. It gives property owners in
                                El Paso a clearer picture of what Home Scape does, the kinds of jobs we take on, and how to start a project.
                            </p>
                            <p className="mt-4 text-base leading-8 text-[#3d4144] md:text-lg">
                                If you are researching sprinkler repair, lawn maintenance, hardscaping, or general landscaping in El Paso,
                                this page is designed to answer common questions while keeping the next step simple.
                            </p>
                        </div>

                        <div className="rounded-[28px] p-8 text-white" style={{ backgroundColor: "#272726" }}>
                            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#9ed174]">Start Here</p>
                            <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
                                Ready to talk about your yard or property?
                            </h2>
                            <p className="mt-5 text-base leading-8 text-white/78 md:text-lg">
                                Whether you need a quote, irrigation help, or a cleaner plan for your outdoor space, the fastest next step is to call or send a message from the homepage.
                            </p>
                            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                                <a
                                    href="tel:915-433-7668"
                                    className="inline-flex items-center justify-center rounded-full bg-[#2AB838] px-6 py-3 font-bold text-white transition hover:bg-[#23992f]"
                                >
                                    Call Now
                                </a>
                                <a
                                    href="/"
                                    className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 font-bold text-white transition hover:bg-white hover:text-black"
                                >
                                    Visit Homepage
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Faq;
