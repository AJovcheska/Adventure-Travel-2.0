var React = require('react');
var backendApi = require('backendApi');
var {DatePicker} = require('react-datepicker');
var moment = require('moment');
var axios = require('axios');
var ReactFileReader = require('react-file-reader');

var CreateTrip = React.createClass({
  getInitialState: function() {
    return{
      selectedOption: null,
      startDate: moment(),
      selectedFile: null
    };
  },
  handleAddTrip: function() {
    var title = this.refs.title.value;
    var region = this.refs.region.value;
    var country = this.refs.country.value;
    var highlights = this.refs.highlights.value;
    var description = this.refs.description.value;
    var dates = this.refs.dates.value;
    var costs = this.refs.costs.value;
    var duration = this.refs.duration.value;
    var destination = this.state.destination;
    var category = this.state.category;

    var architecturalWonders = this.refs.architecturalWonders.checked;
    var motherNature = this.refs.motherNature.checked;
    var art = this.refs.art.checked;
    var ice = this.refs.ice.checked;
    var fauna = this.refs.fauna.checked;
    var farEast = this.refs.farEast.checked;
    var historyMistery = this.refs.historyMistery.checked;
    var mountains = this.refs.mountains.checked;
    var biking = this.refs.biking.checked;
    var photoBomb = this.refs.photoBomb.checked;
    var tags = '';
    if (architecturalWonders) {
      tags+='Architectural wonders,'
    }
    if (motherNature) {
      tags+='Mother nature,'
    }
    if (art) {
      tags+='Inspiring art,'
    }
    if (ice) {
      tags+='Ice & cold,'
    }
    if (fauna) {
      tags+='Fascinating fauna,'
    }
    if (farEast) {
      tags+='Far far East,'
    }
    if (historyMistery) {
      tags+='History and mistery,'
    }
    if (mountains) {
      tags+='In the mountains,'
    }
    if (biking) {
      tags+='Biking and hiking,'
    }
    if (photoBomb) {
      tags+='Photography bomb,'
    }

    backendApi.addTrip(category,region,country,title,costs,tags,duration,dates,null,destination,description,highlights).then((response) => {
      console.log('Response 123', response.status);
      if (response.status === 200) {
        this.refs.title.value = '';
        this.refs.region.value = '';
        this.refs.country.value = '';
        this.refs.highlights.value = '';
        this.refs.description.value = '';
        this.refs.dates.value = '';
        this.refs.costs.value = '';
        this.refs.duration.value = '';
        this.refs.destination.value = '';
        this.refs.category.value = '';
        this.refs.architecturalWonders.checked = null;
        this.refs.motherNature.checked = false;
        this.refs.art.checked = false;
        this.refs.ice.checked = false;
        this.refs.fauna.checked = false;
        this.refs.farEast.checked = false;
        this.refs.historyMistery.checked = false;
        this.refs.mountains.checked = false;
        this.refs.biking.checked = false;
        this.refs.photoBomb.checked = false;
        this.setState({
          selectedOption: null,
          destination: null,
          category: null
        });
      }
    }, function (errorMessage) {
      console.log(errorMessage);
    });

  },
  handleChangeDestination: function(event) {
    this.setState({
      destination: event.target.value
    });
  },
  handleChangeCategory: function(event) {
    this.setState({
      category: event.target.value
    });
  },
  fileChangedHandler: function(event) {
    this.setState({selectedFile: event.target.files[0]})
  },
  uploadHandler: function() {
    const formData = new FormData();
    var name = this.state.selectedFile.name;
    console.log(name);
    formData.append('myFile', this.state.selectedFile, this.state.selectedFile.name);
    axios.post('upload', formData, {
      onUploadProgress: progressEvent => {
        console.log(progressEvent.loaded / progressEvent.total)
      }
    });

    app.post('/upload', (req, res, next) => {
      let uploadFile = req.files.file;
      const fileName = req.files.file.name;
      uploadFile.mv(
        `${__dirname}/public/files/${fileName}`,
        function (err) {
          if (err) {
            return res.status(500).send(err)
          }

          res.json({
            file: `public/${req.files.file.name}`,
          })
        },
      )
    });
  },
  render: function() {
    return (
      <article className="event-content trip-content">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h2>Add new trip</h2>
              <div className="row">
                <header className="item-header trip-header js-item-header">
                  <div className="col-md-12">
                    <input className="inputFieldsCreateTrip" type="text" placeholder="Enter country" ref="country" required/>
                    <input className="inputFieldsCreateTrip" type="text" placeholder="Enter region" ref="region" required/>
                    <input className="inputFieldsCreateTrip" type="text" placeholder="Enter title" ref="title" required/>
                  </div>
                </header>
              </div>
              <div className="row">
                <div className="content-body event-content-body col-md-11 trip-content-body">
                  <section id="event-body" className="item-body">
                    <textarea placeholder="Enter highlights" ref="highlights" required/>
                    <section id="event-trip-itinerary">
                      <div className="trip-day-wrap">
                        <ul className="tripsUl">
                          <textarea placeholder="Enter description" ref="description" required/>
                        </ul>
                      </div>
                    </section>
                    <section id="event-trip-itinerary">
                      <h5 className="event-body-heading">Tags</h5>
                      <div className="createTripTags"><input type="checkbox" ref="architecturalWonders" onChange={this.handleChange}>Architectural wonders</input></div>
                      <div className="createTripTags"><input type="checkbox" ref="motherNature" onChange={this.handleChange}>Mother nature</input></div>
                      <div className="createTripTags"><input type="checkbox" ref="art" onChange={this.handleChange}>Inspiring art</input></div>
                      <div className="createTripTags"><input type="checkbox" ref="ice" onChange={this.handleChange}>Ice & cold</input></div>
                      <div className="createTripTags"><input type="checkbox" ref="fauna" onChange={this.handleChange}>Fascinating fauna</input></div>
                      <div className="createTripTags"><input type="checkbox" ref="farEast" onChange={this.handleChange}>Far far East</input></div>
                      <div className="createTripTags"><input type="checkbox" ref="historyMistery" onChange={this.handleChange}>History and mistery</input></div>
                      <div className="createTripTags"><input type="checkbox" ref="mountains" onChange={this.handleChange}>In the
                        mountains</input></div>
                      <div className="createTripTags"><input type="checkbox" ref="biking" onChange={this.handleChange}>Biking and hiking</input></div>
                      <div className="createTripTags"><input type="checkbox" ref="photoBomb" onChange={this.handleChange}>Photography bomb</input></div>
                    </section>
                  </section>
                </div>
              </div>

              <div className="sort-div-create-trip">
                <h5 className="event-body-heading">Type of destination: </h5>
                <span className="sort-form">
                  <span className="sort-type">
                      <input type="radio" value="City" checked={this.state.destination === 'City'}
                             onChange={this.handleChangeDestination}>City &emsp;&emsp;</input>
                  </span>
                  <span className="sort-type">
                      <input type="radio" value="Mountain" checked={this.state.destination === 'Mountain'}
                             onChange={this.handleChangeDestination}>Mountain &emsp;&emsp;</input>
                  </span>
                  <span className="sort-type">
                      <input type="radio" value="Cold place" checked={this.state.destination === 'Cold place'}
                             onChange={this.handleChangeDestination}>Cold place &emsp;&emsp;</input>
                  </span>
                  <span className="sort-type">
                      <input type="radio" value="Historical place" checked={this.state.destination === 'Historical place'}
                             onChange={this.handleChangeDestination}>Historical place &emsp;&emsp;</input>
                  </span>
                  <span className="sort-type">
                      <input type="radio" value="Tropical place" checked={this.state.destination === 'Tropical place'}
                             onChange={this.handleChangeDestination}>Tropical place &emsp;&emsp;</input>
                  </span>
                </span>
              </div>

              <div className="sort-div-create-trip">
                <h5 className="event-body-heading">Category: </h5>
                <span className="sort-form">
                  <span className="sort-type">
                      <input type="radio" value="HIDDEN_CITIES" checked={this.state.category === 'HIDDEN_CITIES'}
                             onChange={this.handleChangeCategory}>Hidden cities &emsp;&emsp;</input>
                  </span>
                  <span className="sort-type">
                      <input type="radio" value="CRUISING" checked={this.state.category === 'CRUISING'}
                             onChange={this.handleChangeCategory}>Cruising &emsp;&emsp;</input>
                  </span>
                  <span className="sort-type">
                      <input type="radio" value="SCIENCE_AND_NATURE" checked={this.state.category === 'SCIENCE_AND_NATURE'}
                             onChange={this.handleChangeCategory}>Science and nature &emsp;&emsp;</input>
                  </span>
                  <span className="sort-type">
                      <input type="radio" value="HISTORY_AND_CULTURE" checked={this.state.category === 'HISTORY_AND_CULTURE'}
                             onChange={this.handleChangeCategory}>History and culture &emsp;&emsp;</input>
                  </span>
                </span>
              </div>
            </div>
            <aside className="content-siderail">
              <div className="trip-detail-pane-wrap hidden-sm hidden-xs">
                <div className="event-details-pane">
                  <ul className="event-details-top event-details-list">
                    <li>
                      <label className="detail-sm event-details-label">Dates</label>
                      <div className="event-detail">
                        <div>
                          <input type="text" placeholder="Enter dates (example: Apr 21–Apr 30, 2019)" ref="dates" required/>
                        </div>
                      </div>
                    </li>
                    <li>
                      <label className="detail-sm event-details-label">Cost</label>
                      <div className="event-detail">
                        <input type="text" placeholder="Enter costs" ref="costs" required/>
                      </div>
                    </li>
                    <li>
                      <label className="detail-sm event-details-label">Number of days</label>
                      <div className="event-detail">
                        <input type="text" placeholder="Enter duration" ref="duration" required/>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/*<input className="fileInputType" type="file" onChange={this.fileChangedHandler}/>*/}
              {/*<button className="fileInputType" onClick={this.uploadHandler}>Upload image</button>*/}
            </aside>
          </div>
        </div>
        <div className="addTripButton">
          <button type="submit" onClick={this.handleAddTrip}>Add trip</button>
        </div>
      </article>
    );
  }
});

module.exports = CreateTrip;