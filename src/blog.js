const blog = {
name: "Dominick Siciliano",

image: "https://picsum.photos/200",

about:
"My name is Dominick. I'm a software development student and Air National Guard member preparing for a new chapter in my life. This blog follows my journey from Maryland to Alaska alongside my Siberian Husky, Mari, and my two best friends, Hunter and Brendon. I'm not entirely sure what this adventure has in store for me, but that's part of what makes it exciting.",

posts: [
{
id: 1,
title: "June 16, 2026 - The Adventure Begins",
date: "June 16, 2026",
preview:
"Today is the beginning of a completely new chapter. After months of talking and planning, we finally loaded up the truck in Maryland and started the drive north. Mari immediately claimed most of the back seat, and the reality of what we're doing started to sink in. I'm excited, nervous, and honestly a little scared. Alaska has been the goal for a long time, but now it's actually happening."
},
{
id: 2,
title: "June 17, 2026 - Endless Mountains",
date: "June 17, 2026",
preview:
"I've already completed my first two shifts behind the wheel. Today was the first day the landscape really started to change. The mountains were much bigger than I ever expected. Pictures don't do them justice. Every time I thought I'd seen the biggest one, another appeared behind it. It's hard to describe how small they make you feel."
},
{
id: 3,
title: "June 18, 2026 - Canada and Dog Parks",
date: "June 18, 2026",
preview:
"Today we crossed into Canada for the first time in my life. Between driving shifts I tried keeping up with my React coursework, but Mari had other plans. She got a serious case of the zoomies at a nearby dog park and ended up making friends with a German Shepherd. Watching her run around after being stuck in the truck all day was probably the highlight of the trip."
},
{
id: 4,
title: "June 19, 2026 - Almost There",
date: "June 19, 2026",
preview:
"The closer we get to Alaska, the more I find myself thinking about the house I'll be moving into. More than anything, I'm looking forward to having a garage and a place to truly call my own. It's strange knowing that in just a few days my entire daily routine could look completely different."
},
{
id: 5,
title: "June 20, 2026 - First Alaska Meal",
date: "June 20, 2026",
preview:
"Everyone keeps recommending local food, but there's one thing at the top of my list: reindeer sausage. It sounds like the kind of thing you have to try at least once if you're going to live in Alaska. If this adventure is going to be a fresh start, I might as well start by trying something completely new."
}
]
}
// ArticleList.jsx
import Article from "./Article"

function ArticleList({ posts }) {
return (
<main>
{posts.map((post) => (
<Article
key={post.id}
title={post.title}
date={post.date}
preview={post.preview}
/>
))}
</main>
)
}

export default ArticleList

export default blog;