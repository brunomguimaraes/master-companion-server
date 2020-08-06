create table master_companion
(
  id serial primary key not null,
  name text not null,
  nickname text,
  role text not null,
  created_at timestamptz not null DEFAULT NOW(),
  updated_at timestamptz not null DEFAULT NOW()
);
