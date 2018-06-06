import React from 'react';
import { Container, Header, SongList } from './styles';
import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

const Playlist = () => (
  <Container>
    <Header>
      <img
        src="https://i.pinimg.com/originals/a4/bb/0e/a4bb0e276a0699a69936e1b93625db91.jpg"
        alt="Playlist"
      />
      <div>
        <span>Playlist</span>
        <h1>Rock Forever </h1>
        <p> 13 músicas </p>

        <button>PLAY</button>
      </div>
    </Header>

    <SongList cellPadding={0} cellSpacing={0}>
      <thead>
        <th />
        <th>Título</th>
        <th>Artista</th>
        <th>Álbum</th>
        <th>
          <img src={ClockIcon} alt="Duração" />
        </th>
      </thead>

      <tbody>
        <tr>
          <td>
            <img src={PlusIcon} alt="Add playlist" />
          </td>
          <td>Crawling</td>
          <td>Linkin Park</td>
          <td>One More Light</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Add playlist" />
          </td>
          <td>Crawling</td>
          <td>Linkin Park</td>
          <td>One More Light</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Add playlist" />
          </td>
          <td>Crawling</td>
          <td>Linkin Park</td>
          <td>One More Light</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Add playlist" />
          </td>
          <td>Crawling</td>
          <td>Linkin Park</td>
          <td>One More Light</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Add playlist" />
          </td>
          <td>Crawling</td>
          <td>Linkin Park</td>
          <td>One More Light</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Add playlist" />
          </td>
          <td>Crawling</td>
          <td>Linkin Park</td>
          <td>One More Light</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Add playlist" />
          </td>
          <td>Crawling</td>
          <td>Linkin Park</td>
          <td>One More Light</td>
          <td>3:26</td>
        </tr>
      </tbody>
    </SongList>
  </Container>
);

export default Playlist;
