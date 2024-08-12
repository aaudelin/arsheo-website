create table if not exists events (
  id varchar(255) primary key,
  type varchar(255),
  entity varchar(255),
  description text,
  created_at timestamp default current_timestamp
);
