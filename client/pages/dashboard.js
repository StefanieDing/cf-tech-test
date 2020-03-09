import React, { Component } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Button} from 'primereact/button';
import Home from 'index.js';

function Dashboard() {
//make request to server for data
constructor() {
    super();
    this.state = {
        applications: []
    };
    this.application = new Application();
    this.alTemplate = this.alTemplate.bind(this);
    this.glTemplate = this.glTemplate.bind(this);
    this.elTemplate = this.elTemplate.bind(this);
    this.actionTemplate = this.actionTemplate.bind(this);
}

  //displays a check mark if this plan is selected
  alTemplate(applicationData, column) {
    if(applicationData['primary_al'] == 'on'){
      return <i class="pi pi-check"></i>
    }
      return;
  }

  // displays a check mark if this plan is selected
  glTemplate(applicationData, column) {
    if(applicationData['primary_gl'] == 'on'){
      return <i class="pi pi-check"></i>
    }
      return;
  }

  // displays a check mark if this plan is selected
  elTemplate(applicationData, column) {
    if(applicationData['primary_el'] == 'on'){
      return <i class="pi pi-check"></i>
    }
      return;
  }

  //adds edit and delete button
  actionTemplate(applicationData, column) {
      return <div>
        <Button type="button" icon="pi pi-pencil" className="p-button-info" style={{marginRight: '.5em'}}></Button>
        <Button type="button" icon="pi pi-times" className="p-button-danger"></Button>
      </div>;
  }

  componentDidMount() {
      this.application().then(data => this.setState({applications: data}));
  }

  render() {
      var header = <div className="p-clearfix" style={{'lineHeight':'1.87em'}}>Current Applications <Button icon="pi pi-refresh" style={{'float':'right'}}/></div>;

      return (
          <div>
              <div className="content-section introduction">
                  <div className="feature-intro">
                      <h1>Submitted Applications - Database</h1>
                      <p></p>
                  </div>
              </div>

              <div className="content-section implementation">
                  <DataTable value={this.state.applications} header={header} footer={footer}>
                      <Column field="first_name" header="First Name" />
                      <Column field="last_name" header="Last Name" />
                      <Column field="email_address" header="Email Address"/>
                      <Column field="phone_number" header="Phone Number"/>
                      <Column field="company_name" header= "Company Name"/>
                      <Column field="status" header= "Status"/>
                      <Column field="effective_date" header= "Effective Date"/>
                      <Column field="" header="Primary AL" body={this.alTemplate} />
                      <Column field="" header="Primary EL" body={this.elTemplate} />
                      <Column field="" header="Primary GL" body={this.glTemplate} />
                      <Column body={this.actionTemplate} style={{textAlign:'center', width: '8em'}}/>
                  </DataTable>
              </div>
          </div>
      );
  }
}

export default Dashboard