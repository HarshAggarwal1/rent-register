--
-- PostgreSQL database dump
--

-- Dumped from database version 16.3
-- Dumped by pg_dump version 16.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE rentregisterdb;
--
-- Name: rentregisterdb; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE rentregisterdb WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';


ALTER DATABASE rentregisterdb OWNER TO postgres;

\connect rentregisterdb

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: cities; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cities (
    cityid integer NOT NULL,
    city character varying(50) NOT NULL
);


ALTER TABLE public.cities OWNER TO postgres;

--
-- Name: cities_cityid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.cities_cityid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.cities_cityid_seq OWNER TO postgres;

--
-- Name: cities_cityid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.cities_cityid_seq OWNED BY public.cities.cityid;


--
-- Name: expenses; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.expenses (
    expenseid integer NOT NULL,
    amount integer NOT NULL,
    date date NOT NULL,
    description text,
    modeofpay integer DEFAULT 1 NOT NULL,
    propertyid integer NOT NULL
);


ALTER TABLE public.expenses OWNER TO postgres;

--
-- Name: expenses_expenseid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.expenses_expenseid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.expenses_expenseid_seq OWNER TO postgres;

--
-- Name: expenses_expenseid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.expenses_expenseid_seq OWNED BY public.expenses.expenseid;


--
-- Name: floors; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.floors (
    floorid integer NOT NULL,
    floor integer NOT NULL
);


ALTER TABLE public.floors OWNER TO postgres;

--
-- Name: floors_floorid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.floors_floorid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.floors_floorid_seq OWNER TO postgres;

--
-- Name: floors_floorid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.floors_floorid_seq OWNED BY public.floors.floorid;


--
-- Name: modeofpay; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.modeofpay (
    modeid integer NOT NULL,
    mode character varying(20) NOT NULL
);


ALTER TABLE public.modeofpay OWNER TO postgres;

--
-- Name: modeofpay_modeid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.modeofpay_modeid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.modeofpay_modeid_seq OWNER TO postgres;

--
-- Name: modeofpay_modeid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.modeofpay_modeid_seq OWNED BY public.modeofpay.modeid;


--
-- Name: properties; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.properties (
    propertyid integer NOT NULL,
    home character varying(100) NOT NULL,
    street character varying(100),
    area character varying(100),
    landmark character varying(100),
    floorid integer NOT NULL,
    cityid integer NOT NULL,
    stateid integer NOT NULL,
    ptypeid integer NOT NULL
);


ALTER TABLE public.properties OWNER TO postgres;

--
-- Name: properties_propertyid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.properties_propertyid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.properties_propertyid_seq OWNER TO postgres;

--
-- Name: properties_propertyid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.properties_propertyid_seq OWNED BY public.properties.propertyid;


--
-- Name: propertytype; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.propertytype (
    ptypeid integer NOT NULL,
    ptype character varying(20) NOT NULL
);


ALTER TABLE public.propertytype OWNER TO postgres;

--
-- Name: propertytype_ptypeid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.propertytype_ptypeid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.propertytype_ptypeid_seq OWNER TO postgres;

--
-- Name: propertytype_ptypeid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.propertytype_ptypeid_seq OWNED BY public.propertytype.ptypeid;


--
-- Name: receipts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.receipts (
    receiptid integer NOT NULL,
    amount integer NOT NULL,
    date date NOT NULL,
    modeofpay integer DEFAULT 1 NOT NULL,
    description text,
    tenantid integer DEFAULT 1 NOT NULL
);


ALTER TABLE public.receipts OWNER TO postgres;

--
-- Name: receipts_receiptid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.receipts_receiptid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.receipts_receiptid_seq OWNER TO postgres;

--
-- Name: receipts_receiptid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.receipts_receiptid_seq OWNED BY public.receipts.receiptid;


--
-- Name: states; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.states (
    stateid integer NOT NULL,
    state character varying(50) NOT NULL
);


ALTER TABLE public.states OWNER TO postgres;

--
-- Name: states_stateid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.states_stateid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.states_stateid_seq OWNER TO postgres;

--
-- Name: states_stateid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.states_stateid_seq OWNED BY public.states.stateid;


--
-- Name: tenants; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tenants (
    tenantid integer NOT NULL,
    fname character varying(30) NOT NULL,
    lname character varying(30),
    phone character varying(10) NOT NULL,
    id character varying(30),
    idtype character varying(40),
    moveindate date NOT NULL,
    active boolean DEFAULT true NOT NULL,
    propertyid integer NOT NULL,
    CONSTRAINT tenants_phone_check CHECK ((length((phone)::text) = 10))
);


ALTER TABLE public.tenants OWNER TO postgres;

--
-- Name: tenants_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tenants_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.tenants_id_seq OWNER TO postgres;

--
-- Name: tenants_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tenants_id_seq OWNED BY public.tenants.tenantid;


--
-- Name: cities cityid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cities ALTER COLUMN cityid SET DEFAULT nextval('public.cities_cityid_seq'::regclass);


--
-- Name: expenses expenseid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.expenses ALTER COLUMN expenseid SET DEFAULT nextval('public.expenses_expenseid_seq'::regclass);


--
-- Name: floors floorid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.floors ALTER COLUMN floorid SET DEFAULT nextval('public.floors_floorid_seq'::regclass);


--
-- Name: modeofpay modeid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.modeofpay ALTER COLUMN modeid SET DEFAULT nextval('public.modeofpay_modeid_seq'::regclass);


--
-- Name: properties propertyid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.properties ALTER COLUMN propertyid SET DEFAULT nextval('public.properties_propertyid_seq'::regclass);


--
-- Name: propertytype ptypeid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.propertytype ALTER COLUMN ptypeid SET DEFAULT nextval('public.propertytype_ptypeid_seq'::regclass);


--
-- Name: receipts receiptid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.receipts ALTER COLUMN receiptid SET DEFAULT nextval('public.receipts_receiptid_seq'::regclass);


--
-- Name: states stateid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.states ALTER COLUMN stateid SET DEFAULT nextval('public.states_stateid_seq'::regclass);


--
-- Name: tenants tenantid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tenants ALTER COLUMN tenantid SET DEFAULT nextval('public.tenants_id_seq'::regclass);


--
-- Data for Name: cities; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: expenses; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: floors; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: modeofpay; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: properties; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: propertytype; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: receipts; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: states; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: tenants; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Name: cities_cityid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cities_cityid_seq', 1, false);


--
-- Name: expenses_expenseid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.expenses_expenseid_seq', 1, false);


--
-- Name: floors_floorid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.floors_floorid_seq', 1, false);


--
-- Name: modeofpay_modeid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.modeofpay_modeid_seq', 1, false);


--
-- Name: properties_propertyid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.properties_propertyid_seq', 1, false);


--
-- Name: propertytype_ptypeid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.propertytype_ptypeid_seq', 1, false);


--
-- Name: receipts_receiptid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.receipts_receiptid_seq', 1, false);


--
-- Name: states_stateid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.states_stateid_seq', 1, false);


--
-- Name: tenants_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tenants_id_seq', 1, false);


--
-- Name: cities cities_city_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cities
    ADD CONSTRAINT cities_city_key UNIQUE (city);


--
-- Name: cities cities_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cities
    ADD CONSTRAINT cities_pkey PRIMARY KEY (cityid);


--
-- Name: expenses expenses_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.expenses
    ADD CONSTRAINT expenses_pkey PRIMARY KEY (expenseid);


--
-- Name: floors floors_floor_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.floors
    ADD CONSTRAINT floors_floor_key UNIQUE (floor);


--
-- Name: floors floors_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.floors
    ADD CONSTRAINT floors_pkey PRIMARY KEY (floorid);


--
-- Name: modeofpay modeofpay_mode_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.modeofpay
    ADD CONSTRAINT modeofpay_mode_key UNIQUE (mode);


--
-- Name: modeofpay modeofpay_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.modeofpay
    ADD CONSTRAINT modeofpay_pkey PRIMARY KEY (modeid);


--
-- Name: properties properties_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.properties
    ADD CONSTRAINT properties_pkey PRIMARY KEY (propertyid);


--
-- Name: propertytype propertytype_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.propertytype
    ADD CONSTRAINT propertytype_pkey PRIMARY KEY (ptypeid);


--
-- Name: propertytype propertytype_ptype_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.propertytype
    ADD CONSTRAINT propertytype_ptype_key UNIQUE (ptype);


--
-- Name: receipts receipts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.receipts
    ADD CONSTRAINT receipts_pkey PRIMARY KEY (receiptid);


--
-- Name: states states_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.states
    ADD CONSTRAINT states_pkey PRIMARY KEY (stateid);


--
-- Name: states states_state_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.states
    ADD CONSTRAINT states_state_key UNIQUE (state);


--
-- Name: tenants tenants_id_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tenants
    ADD CONSTRAINT tenants_id_key UNIQUE (id);


--
-- Name: tenants tenants_phone_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tenants
    ADD CONSTRAINT tenants_phone_key UNIQUE (phone);


--
-- Name: tenants tenants_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tenants
    ADD CONSTRAINT tenants_pkey PRIMARY KEY (tenantid);


--
-- Name: expenses expenses_modeofpay_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.expenses
    ADD CONSTRAINT expenses_modeofpay_fkey FOREIGN KEY (modeofpay) REFERENCES public.modeofpay(modeid) ON DELETE SET DEFAULT;


--
-- Name: expenses expenses_propertyid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.expenses
    ADD CONSTRAINT expenses_propertyid_fkey FOREIGN KEY (propertyid) REFERENCES public.properties(propertyid);


--
-- Name: properties properties_cityid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.properties
    ADD CONSTRAINT properties_cityid_fkey FOREIGN KEY (cityid) REFERENCES public.cities(cityid);


--
-- Name: properties properties_floorid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.properties
    ADD CONSTRAINT properties_floorid_fkey FOREIGN KEY (floorid) REFERENCES public.floors(floorid);


--
-- Name: properties properties_ptypeid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.properties
    ADD CONSTRAINT properties_ptypeid_fkey FOREIGN KEY (ptypeid) REFERENCES public.propertytype(ptypeid);


--
-- Name: properties properties_stateid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.properties
    ADD CONSTRAINT properties_stateid_fkey FOREIGN KEY (stateid) REFERENCES public.states(stateid);


--
-- Name: receipts receipts_modeofpay_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.receipts
    ADD CONSTRAINT receipts_modeofpay_fkey FOREIGN KEY (modeofpay) REFERENCES public.modeofpay(modeid) ON DELETE SET DEFAULT;


--
-- Name: receipts receipts_tenantid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.receipts
    ADD CONSTRAINT receipts_tenantid_fkey FOREIGN KEY (tenantid) REFERENCES public.tenants(tenantid) ON DELETE CASCADE;


--
-- Name: tenants tenants_propertyid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tenants
    ADD CONSTRAINT tenants_propertyid_fkey FOREIGN KEY (propertyid) REFERENCES public.properties(propertyid);


--
-- PostgreSQL database dump complete
--

