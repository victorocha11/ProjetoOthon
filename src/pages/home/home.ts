import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TarefaPage } from '../tarefa/tarefa';
import { Tare } from '../../Tare';
import { Lista } from '../../Lista';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  
  /*NextPage(page) {
    console.log(event)
  }*/
})
export class HomePage {
  items= new Array();
  constructor(public navCtrl: NavController) { 

  }

  addList($scope) {
    //this.aux.nome=$scope.listName;
    var auxTar:Tare[];
    
    var aux = new Lista($scope.listName, auxTar);
    console.log(aux.nome);
    this.items.push(aux);
    console.log(this.items);
    
  }

   itemSelected(item: string) {    
     console.log("Selected Item", item);
     this.navCtrl.push(TarefaPage, {param1:item}); 
  }

}
