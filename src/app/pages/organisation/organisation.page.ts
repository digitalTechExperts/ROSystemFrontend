import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-organisation',
  templateUrl: './organisation.page.html',
  styleUrls: ['./organisation.page.scss'],
})
export class OrganisationPage implements OnInit {

  public organisationArr = [{
    name: 'Guru kripa Technologies',
    address: 'abskjdbasjdnjasndjkasndjknasjkdnajskbdkjasbsdkjasdkjaskdkanhjansdbknjksadskas',
    details: 'Im sorry to interrupt, but our fundraiser won’t last long. This Tuesday, 19 September, I humbly request you to reflect on the number of times you visited Wikipedia in the past year, the value you got from it, and whether youre able to contribute ₹ 25. If you can, kindly join the 2% of readers who donate. If everyone reading this right now gave ₹ 25, wed reach our goal in a couple of hours',
    gst: 721637812673
  }
]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  
  onAddOrganisation(){
    this.router.navigate(['/add-organisation'])
  }

}
