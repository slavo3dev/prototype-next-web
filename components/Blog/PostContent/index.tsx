/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useState, useEffect } from "react";
import classes from "./postcontent.module.css";
import { PostHeader } from "../PostHeader";
import ReactMarkdown from "react-markdown";
import rehypeRaw from 'rehype-raw'
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface PostContentDataType
{
    post: any
}

const CodeBlock = ({ className, children }: { className?: string; children: React.ReactNode }) => {
	const [isMounted, setIsMounted] = useState(false);
	// No need to destructure code here, directly use className and children
	const language = className ? className.split("-")[1] : "javascript";

	useEffect(() => {
		setIsMounted(true);
	}, []);

	// Use children directly instead of code.children
	return (
		isMounted ? (
			<SyntaxHighlighter style={atomDark} language={language} children={children} />
		) : (
			<p>Loading...</p> // This can be a placeholder or null if you prefer not to show anything
		)
	);
};

const customRenderers = {
		p(paragraph: any) {
			const { node } = paragraph;
			if (node.children[0].tagName === "img" ) {
				const image = node.children[0];
			
				return (
					<div className={classes.image}>
						<Image
							src={`${image.properties.src}`}
							alt={image.alt}
							width={600}
							height={300}
						/>
					</div>
				);
			}

			return <p>{paragraph.children}</p>;
		},

		code(code: any) {
		    return <CodeBlock className={code.className} children={code.children} />;	
		},
	};


export const PostContent: FC<PostContentDataType> = ({ post }) =>
{
	const imgPath = `/images/post-img/${ post.image }`;
    
	return (
		<article className={classes.content}>
			<PostHeader title={post.title} imgSrc={imgPath} />
			<ReactMarkdown components={customRenderers} rehypePlugins={[rehypeRaw]}>{post.content}</ReactMarkdown> 
		</article>
	);
};