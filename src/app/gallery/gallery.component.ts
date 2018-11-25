import { galleryCard } from './../models/galleryCard';
import { Component, OnInit, HostListener } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit 
{
  
  cards : galleryCard[];
  baseUrl = "assets/img/";
  constructor() { }
  showImageDetailsFlag : boolean = false;
  selectedPaintingCard : galleryCard;
  selectedPaintingCardsByType : galleryCard[];

  ngOnInit() 
  {
    
    this.cards = [{paintingType : 'landscape', paintingName : 'Scenic Beauty', imageUrl : 'i1.jpg', paintingId : 1, size: '3*4'},
            {paintingType : 'landscape', paintingName : 'Malshej Ghats', imageUrl : 'i2.jpg', paintingId : 2, size: '4*8'},
            {paintingType : 'landscape', paintingName : 'Khadakwasla Dam Backwater', imageUrl : 'i3.jpg', paintingId : 3, size: '8*5'},
            {paintingType : 'landscape', paintingName : 'Expressway chaos', imageUrl : 'i4.jpg', paintingId : 4, size: '3*4'},
            {paintingType : 'landscape', paintingName : 'Good about mornings', imageUrl : 'i5.jpg', paintingId : 5, size: '2*7'},
            {paintingType : 'landscape', paintingName : 'Green Island', imageUrl : 'i6.jpg', paintingId : 6, size: '5*5'},
            {paintingType : 'landscape', paintingName : 'Sea is the limit', imageUrl : 'i7.jpg', paintingId : 7, size: '2*7'},
            {paintingType : 'landscape', paintingName : 'Trees and trees', imageUrl : 'i8.jpg', paintingId : 8, size: '5*4'}
              ];
    this.cards.forEach(p=>p.imageUrl = this.baseUrl + ""+ p.imageUrl);

    this.selectedPaintingCardsByType = this.cards;
  }
  showImageDetails = function(card : galleryCard)
  {
    this.showImageDetailsFlag = true;
    $('#imageDetails').show();
    $('#imageDetails').focus();
    this.selectedPaintingCard = card;
  }
  hideImageDetails = function()
  {
    $('#imageDetails').hide();
  }
  showSelectedPaintingType(type: string)
  {
    if(type != '0')
      this.selectedPaintingCardsByType = this.cards.filter(q=>q.paintingType == type);
  }  

  @HostListener("window:scroll",[])
  onWindowScroll(){
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 70) 
    {
      $('#mytopNav').css("height","10%");  
      $('.brandName').css("font-size","large");
      $('.topnav a').css("font-size","small");
    } else
    {
        $('#mytopNav').css("height","15%");
        $('.brandName').css("font-size","");
        $('.topnav a').css("font-size","");
    }
  }
}
