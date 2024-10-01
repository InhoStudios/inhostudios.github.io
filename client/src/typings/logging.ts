export enum FACILITY {
  Kernel = 0,
  Authentication = 5,
  User = 10,
  Email = 15,
  Data = 20,
}

export enum SEVERITY {
  emergency = 0,
  alert = 1,
  critical = 2,
  error = 3,
  warning = 4,
  notice = 5,
  informational = 6,
  debug = 7,
}

export enum MSGID {
  create = "CREATE",
  verify = "VERIFY",
  modify = "MODIFY",
  promote = "PROMOTE",
  remove = "REMOVE",
  delete = "DELETE",
  change_pw = "CHANGEPASSWORD",
  add = "ADD",
  send = "SEND",
  login_pw = "LOGINPASSWORD",
  login_link = "LOGINLINK",
  login_fail = "LOGINFAIL",
  unusual = "UNUSUAL",
  nilvalue = "-",
}

export const facilityTitles = {
  [0]: "KRNL",
  [5]: "AUTH",
  [10]: "USER",
  [15]: "MAIL",
  [20]: "DATA",
};

export type Identifier = {
  column: string;
  value: string;
};

export type TableParam = {
  paramName: string;
  paramValue: string;
};

export type TableElement = {
  table_name: string;
  params: TableParam[];
};

export type SyslogContent = {
  facility: FACILITY;
  severity: SEVERITY;
  hostname: string;
  appname: string;
  procid: string;
  msgid: MSGID;
  timestamp: Date;
  msg: SyslogMessage;
};

export type SyslogMessage = {
  email: string;
  body: string;
  identifier?: Identifier;
  tableElements?: TableElement[];
};
