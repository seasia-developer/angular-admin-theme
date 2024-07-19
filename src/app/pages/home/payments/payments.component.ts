import { Component, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { GetdataService } from 'src/app/services/getdata.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent {

  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ["body","id", "title" , "userId"];
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  pageSize = 10;
  pageIndex = 0;
  totalItems!: number;
  searchTerm :any;

  constructor(private dataservice: GetdataService) { }

  ngOnInit() {
    this.loadTableData()
  }
  loadTableData() {
    this.dataservice.getData(this.pageIndex, this.pageSize).subscribe((data: any) => {
      this.dataSource = new MatTableDataSource(data);
      console.log(this.dataSource, "datasource")
      this.totalItems = data.length;
      this.dataSource.paginator = this.paginator;
      console.log(data, "data");
      console.log(this.totalItems , "totalItems")
      // this.applyFilter()
    })
  }


  onPageChange(event: PageEvent): void {
    // Update the pagination properties
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;

    // Fetch data from the API based on the updated pagination properties
    this.loadTableData();
  }

}
