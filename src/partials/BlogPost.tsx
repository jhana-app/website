import type { ReactNode } from 'react';
import type { IFrontmatter } from 'src/astro-boilerplate-components';
import {
  PostContent,
  PostHeader,
  Section,
} from 'src/astro-boilerplate-components';

import { AppConfig } from '@/utils/AppConfig';

type IBlogPostProps = {
  frontmatter: IFrontmatter;
  children: ReactNode;
};

const BlogPost = (props: IBlogPostProps) => (
  <Section>
    <PostHeader content={props.frontmatter} author={AppConfig.author} />

    <PostContent content={props.frontmatter}>{props.children}</PostContent>
  </Section>
);

export { BlogPost };
