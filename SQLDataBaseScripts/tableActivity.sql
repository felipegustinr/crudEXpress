-- Table: public.activity

-- DROP TABLE IF EXISTS public.activity;

CREATE TABLE IF NOT EXISTS public.activity
(
    id bigint NOT NULL DEFAULT nextval('activity_id_seq'::regclass),
    name character varying(200) COLLATE pg_catalog."default" NOT NULL,
    description text COLLATE pg_catalog."default" NOT NULL,
    "id_Project" integer,
    CONSTRAINT activity_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.activity
    OWNER to postgres;