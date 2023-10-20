/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface PageProps {
  title: string;
}

class Component<T> {
  constructor (public props:T) {

  }
}

class Page extends Component<PageProps> {
  pageInfo () {
    console.log(this.props.title);
  }
}

const pageProps: PageProps = {
  title: 'Page Title',
};

const page = new Page(pageProps);
page.pageInfo();

// export {};