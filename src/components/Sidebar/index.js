import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { Container, NewPlaylist, Nav } from './styles';
import AddPlaylistIcon from '../../assets/images/add_playlist.svg';
import { Creators as PlaylistActions } from '../../store/ducks/playlists';
import Loading from '../../components/Loading';

class Sidebar extends Component {
  static propTypes = {
    getPlaylistsRequest: PropTypes.func.isRequired,
    playlists: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
      })),
      loading: PropTypes.bool,
    }).isRequired,
  };
  componentDidMount() {
    this.props.getPlaylistsRequest();
  }
  render() {
    return (
      <Container>
        <div>
          <Nav main>
            <li>
              <Link to="/">Navegar</Link>
            </li>
            <li>
              <a href="http://google.com">Rádio</a>
            </li>
          </Nav>
          <Nav>
            <li>
              <span>Teste</span>
            </li>
            <li>
              <a href="http://google.com">Seu Daily Mix</a>
            </li>
            <li>
              <a href="http://google.com">Tocados recentemente</a>
            </li>
            <li>
              <a href="http://google.com">Álbums</a>
            </li>
            <li>
              <a href="http://google.com">Artistas</a>
            </li>
            <li>
              <a href="http://google.com">Estações</a>
            </li>
            <li>
              <a href="http://google.com">Arquivos Locais</a>
            </li>
            <li>
              <a href="http://google.com">Vídeos</a>
            </li>
            <li>
              <a href="http://google.com">Podcast</a>
            </li>
          </Nav>
          <Nav>
            <li>
              <span>Playlist</span>
              {this.props.playlists.loading && <Loading />}
            </li>
            {this.props.playlists.data.map(playlist => (
              <li key={playlist.id}>
                <Link to={`/playlist/${playlist.id}`}>{playlist.title}</Link>
              </li>
            ))}
          </Nav>
        </div>

        <NewPlaylist>
          <img src={AddPlaylistIcon} alt="Adicionar playlist" />
          Nova playlist
        </NewPlaylist>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  playlists: state.playlists,
});

const mapDispatchToProps = dispatch => bindActionCreators(PlaylistActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar);
