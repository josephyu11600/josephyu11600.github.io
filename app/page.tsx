import { BlogPosts } from 'app/components/posts';

export default function Page() {
	return (
		<section>
			<h1 className="mb-8 text-2xl font-semibold tracking-tighter">
				My Portfolio
			</h1>
			<div className="flex flex-col md:flex-row">
				<div className="flex-1">
					<BlogPosts />
				</div>
				<p className="mb-4 flex-1 mr-5">
					{`I'm a Vim enthusiast and tab advocate, finding unmatched efficiency in
        Vim's keystroke commands and tabs' flexibility for personal viewing
        preferences. This extends to my support for static typing, where its
        early error detection ensures cleaner code, and my preference for dark
        mode, which eases long coding sessions by reducing eye strain.`}
				</p>
			</div>
		</section>
	);
}
