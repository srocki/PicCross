const React = require('react'),
  PicCross = require('../pic-cross'),
  classnames = require('classnames');


const Tile = React.createClass({
  propTypes: {
    tile: React.PropTypes.instanceOf(PicCross.Tile).isRequired,
    updateGame: React.PropTypes.func.isRequired,
    highlight: React.PropTypes.bool.isRequired,
  },

  handleClick(e) {
    this.props.updateGame(this.props.tile, e.altKey);
  },

  render() {
    const { tile, highlight } = this.props;

    const classNames = classnames('tile', {
      'filled': tile.filled,
      'flagged': tile.flagged,
      'fifth-column': highlight,
    });
    return (
      <div
        className={classNames}
        onClick={this.handleClick}
      >
      </div>
    );
  }
});

module.exports = Tile;