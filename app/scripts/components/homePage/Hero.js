import React from 'react';
import {browserHistory, Link} from 'react-router';

const Hero = React.createClass({
  handleChange(e) {
    console.log('id', e.target.id);
  },
  searchHandler: function (e) {
    e.preventDefault();
    // console.dir(document.getElementById('business-type').label);
    console.log('this.refs.medical', this.refs.medical);
    console.log('this.refs.social', this.refs.social);
    console.log('this.refs.school', this.refs.school);
    // let businessType = document.querySelector('.search-field:checked').value;
    // browserHistory.push(`/search/type=${businessType}`);
  },
  render: function () {
    return (
      <section className="hero">
        <figure><img src="http://placekitten.com/250/250"/></figure>
        <h1>Better Beehive Project</h1>
        <div className="buzz-or-sting">
          <figure><Link to="/buzz"><img src="http://placekitten.com/100/100"/></Link></figure>
          <figure><Link to="/sting"><img src="http://placekitten.com/100/100"/></Link></figure>
        </div>
        <form onSubmit={this.searchHandler} className="search-field">
          <input className="search-field" type="checkbox" id="medical" value="medical"/><label>Medical</label>
          <input className="search-field" type="checkbox" id="social" value="social"/><label>Social</label>
          <input className="search-field" type="checkbox" id="school" value="school"/><label>School</label>

          <input type='text' list='business-type'/>

          <select id='business-type' ref='type' onChange={this.handleChange}>
            this is where we need to be
            <option>Search</option>
            <option  ref="medical" id="0" value='Medical'>Med</option>
            <option  ref="social" id="1" value='Social'>Soc</option>
            <option ref="school" id="2" value='School'>School</option>
          </select>
          <button onClick={this.searchHandler}>Submit</button>
        </form>
      </section>
    )
  }
});

export default Hero;
