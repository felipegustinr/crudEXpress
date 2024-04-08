-- Table: public.employ

-- DROP TABLE IF EXISTS public.employ;

CREATE TABLE IF NOT EXISTS public.employ
(
    id bigint NOT NULL DEFAULT nextval('employ_id_seq'::regclass),
    name character varying(200) COLLATE pg_catalog."default",
    lastname character varying(200) COLLATE pg_catalog."default",
    email character varying(150) COLLATE pg_catalog."default",
    CONSTRAINT employ_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.employ
    OWNER to postgres;