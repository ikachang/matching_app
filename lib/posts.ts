import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');
export type PostData = {
	id: string;
	date: string;
	title: string;
};
export const getSortedPostsData = (): PostData[] => {
	// /postsディレクトリ内のファイル名を得る
	const fileNames = fs.readdirSync(postsDirectory);
	const allPostsData = fileNames.map((fileName) => {
		// 拡張子".md"をファイル名から除く
		const id = fileName.replace(/\.md$/, '');
		// マークダウンファイルを文字列として読み込む
		const fullPath = path.join(postsDirectory, fileName);
		const fileContents = fs.readFileSync(fullPath, 'utf8');
		// gray-matterでpostのメタデータ部分を解析する
		const matterResult = matter(fileContents);
		// 取り出したデータにidを組み合わせる
		return {
			id,
			...matterResult.data as {date: string; title: string},
		};
	});
	// postを日付順に並べ替える
	return allPostsData.sort((a, b) => {
		if (a.date < b.date) {
			return 1;
		} else {
			return -1;
		}
	});
};