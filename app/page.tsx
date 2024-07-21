import { BlogPosts } from 'app/components/posts';
import DynamicHeader from './components/header';
import portfolioImage from './portfolio_image.jpg';

export default function Page() {
	return (
		<section>
			<h1 className="text-2xl font-semibold mb-4">Hi I'm Joseph</h1>
			<DynamicHeader />
			<div className="flex flex-col md:flex-row">
				<div className="flex-1">
					<img
						className="h-auto max-w-2xs rounded-lg"
						src={portfolioImage.src}
					/>
				</div>
				<div className="mb-4 flex-1 mr-5">
					<p className="mb-4">
						{`
              I am currently a first year Masters student at Georgia Tech studying Computer Science.
              `}
					</p>
					<p className="mb-4">
						{`I have industry experience building UI with`}{' '}
						<span className="font-bold">{`React`} </span>{' '}
						{`, services using `}{' '}
						<span className="font-bold">{`Python`}</span> {`and`}{' '}
						<span className="font-bold">{`Go`}</span>
						{`, and leveraging `}
						<span className="font-bold">{`Kubernetes`}</span>{' '}
						{`and`} <span className="font-bold">{`Docker`}</span>{' '}
						{`to deploy applications onto different cloud environments.`}
					</p>
					<p>
						{`
            I enjoy diving deep and moving quickly to tackle new features with high levels of ambiguity. In the process I find myself digging through documentation for containerized solutions, learning new frameworks, and collaborating with open source developers.
			My current interests are in computer networking and cloud focusing on the WebRTC protocol and ways to support WebRTC infrastructure on cloud environments.
          `}
					</p>
				</div>
			</div>
		</section>
	);
}
