import type { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Layout from '../../components/layout';

const FirstPost: FC = () => {
	return (
		<Layout>
			<Head>
				<title>First Post</title>
			</Head>
			<h1>First Post</h1>
			<h2>
				<Link href="/"> Go Back Home </Link>
			</h2>
			<Image
				src="/images/profile.jpg"
				height={144}
				width={144}
				alt="Hibiki Matsubara"
			/>
		</Layout>	
	);
};
export default FirstPost;