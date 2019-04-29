// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  List,
  ListItem,
  Notes,
  S,
  Slide,
  Text
} from 'spectacle';

import FrontSlide from '../../common/slides/wgforge';
import QuestionsSlide from '../../common/slides/questions';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

const images = {
  v8: require('../assets/v8.png'),
  eventLoop: require('../assets/event-loop.png'),
  dahl: require('../assets/dahl.jpg'),
  nodeArchitecture: require('../assets/na.png'),
  nodeEventLoop: require('../assets/node_event_loop.png')
};

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

// importing in such way to make sure <Notes> properly works
const slidesToImport = [
  new Promise((resolve, reject) =>
    import('../../common/slides/rules')
      .then(m => resolve(['RulesSlide', m]))
      .catch(reject)
  )
];

export default class Presentation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: {}
    };
  }

  componentDidMount() {
    Promise.all(Object.values(slidesToImport))
      .then(loadedSlides => {
        const slides = {};

        loadedSlides.forEach(([name, s]) => {
          slides[name] = s.default();
        });

        this.setState({ slides });
      })
      .catch(e => console.error(e));
  }

  render() {
    const { RulesSlide = <Slide>loading…</Slide> } = this.state.slides;

    return (
      <Deck transition={['slide']} transitionDuration={500} theme={theme}>
        <FrontSlide textColor="secondary" />

        {RulesSlide}

        <Slide>
          <Heading size={2} fit caps lineHeight={1} textColor="secondary">
            Node.js
          </Heading>
        </Slide>

        <Slide>
          <Image src={images.eventLoop} />
          <Text textAlign="left" textSize="16" textColor="#aaa">
            Автор:{' '}
            <Link
              textColor="#333"
              href="https://vaibhavgupta.me/2018/01/20/understanding-event-loop/"
              title="Understanding Event Loop"
            >
              Vaibhav Gupta (https://vaibhavgupta.me/2018/01/20/understanding-event-loop/)
            </Link>
            <br />
            <Link
              textColor="#333"
              href="https://vaibhavgupta.me/2018/01/20/understanding-event-loop/"
            >
              Добросовестное использование
            </Link>
          </Text>
        </Slide>

        <Slide>
          <Image src={images.v8} width="200" />
          <Text textAlign="left" textSize="16" textColor="#333">
            <Link
              textColor="#333"
              href="https://github.com/v8/v8"
              title="The official mirror of the V8 Git repository"
              target="_blank"
            >
              https://github.com/v8/v8
            </Link>
            <List textSize="25">
              <ListItem>JavaScript движок от Google с открытым исходным кодом.</ListItem>
              <ListItem>осуществляет выполнение ECMAScript в соответствии с ECMA-262.</ListItem>
              <ListItem>написан на C++ и используется в Google Chrome</ListItem>
              <ListItem>
                может работать автономно, или может быть <u>встроен</u> в любое C++ приложение.
              </ListItem>
            </List>
          </Text>
        </Slide>

        <Slide>
          <Text>
            <List textSize="25">
              <ListItem>Возможность организовать наш код в виде многоразовых фрагментов</ListItem>
              <ListItem>Возможность работы с файлами</ListItem>
              <ListItem>Возможность работы с базами данных</ListItem>
              <ListItem>Возможность принимать запросы и отправлять ответы</ListItem>
            </List>
          </Text>
        </Slide>

        <Slide>
          <Layout>
            <Fill>
              <Image src={images.dahl} />
            </Fill>
          </Layout>

          <Layout>
            <Fill>
              <Text textAlign="center">Ryan Dahl</Text>
            </Fill>
          </Layout>
        </Slide>

        <Slide>
          <Fill>
            Node.js — кросс-платформенная среда выполнения JavaScript вне браузера. Превращает
            JavaScript из узкоспециализированного языка в язык общего назначения.
          </Fill>
          <Text textAlign="right">
            <small>
              <Link textColor="secondary" href="https://en.wikipedia.org/wiki/Node.js">
                wikipedia
              </Link>
            </small>
          </Text>
        </Slide>

        <Slide>
          <Fill>
            <Image src={images.nodeArchitecture} />
          </Fill>
        </Slide>

        <Slide>
          <Layout>
            <Fill>
              <Image src={images.nodeEventLoop} />
            </Fill>
          </Layout>

          <Layout>
            <Fill>
              <Text textAlign="center">Событийно-ориентированный неблокирующий механизм Node</Text>
            </Fill>
          </Layout>
        </Slide>

        <Slide>
          <Fill>
            <Text textAlign="left" textColor="#1dd678">
              ✔ Отлично подходит для приложений с большим количеством операций ввода-вывода
            </Text>
            <br />
            <Text textAlign="left" textColor="#e9162a">
              🚫 Не следует использовать для приложений с высокой загрузкой процессора
            </Text>
          </Fill>
        </Slide>
      </Deck>
    );
  }
}
