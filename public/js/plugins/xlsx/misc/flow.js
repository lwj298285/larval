/*::
type ZIPFile = any;

type XLString = {
	t:string;
	r?:string;
	h?:string;
};

type WorkbookFile = any;

type Workbook = {
	SheetNames: Array<string>;
	Sheets: any;

	Props?: any;
	Custprops?: any;
	Themes?: any;

	Workbook?: WBWBProps;

	SSF?: {[n:number]:string};
	cfb?: any;
};

type WorkbookProps = {
	SheetNames?: Array<string>;
}

type WBWBProps = {
	Sheets: Array<WBWSProp>;
};

type WBWSProp = {
	Hidden?: number;
	name?: string;
}

interface CellAddress {
	r:number;
	c:number;
};
type CellAddrSpec = CellAddress | string;

type Cell = any;

type Range = {
	s: CellAddress;
	e: CellAddress;
}
type Worksheet = any;

type Sheet2CSVOpts = any;
type Sheet2JSONOpts = any;

type ParseOpts = any;

type WriteOpts = any;
type WriteFileOpts = any;

type RawData = any;

interface TypeOpts {
	type:string;
}

type XLSXModule = any;

type SST = {
	[n:number]:XLString;
	Count:number;
	Unique:number;
	push(x:XLString):void;
	length:number;
};

type Comment = any;

type ColInfo = {
	MDW?:number;  // Excel's "Max Digit Width" unit, always integral
	width:number; // width in Excel's "Max Digit Width", width*256 is integral 
	wpx?:number;  // width in screen pixels
	wch?:number;  // intermediate character calculation
};

type AOA = Array<Array<any> >;
*/
