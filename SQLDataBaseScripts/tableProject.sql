-- Table: public.project

-- DROP TABLE IF EXISTS public.project;

CREATE TABLE IF NOT EXISTS public.project
(
    id bigint NOT NULL DEFAULT nextval('project_id_seq'::regclass),
    title character varying(200) COLLATE pg_catalog."default" NOT NULL,
    description text COLLATE pg_catalog."default",
    state boolean DEFAULT false,
    id_per_res integer,
    CONSTRAINT project_pkey PRIMARY KEY (id),
    CONSTRAINT project_id_per_res_fkey FOREIGN KEY (id_per_res)
        REFERENCES public.employ (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.project
    OWNER to postgres;