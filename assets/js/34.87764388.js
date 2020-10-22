(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{405:function(e,t,r){"use strict";r.r(t);var a=r(25),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"whole-genome-germline-single-sample-overview"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#whole-genome-germline-single-sample-overview"}},[e._v("#")]),e._v(" Whole Genome Germline Single Sample Overview")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"center"}},[e._v("Pipeline Version")]),e._v(" "),r("th",{staticStyle:{"text-align":"center"}},[e._v("Date Updated")]),e._v(" "),r("th",{staticStyle:{"text-align":"center"}},[e._v("Documentation Author")]),e._v(" "),r("th",{staticStyle:{"text-align":"center"}},[e._v("Questions or Feedback")])])]),e._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"center"}},[r("a",{attrs:{href:"https://github.com/broadinstitute/warp/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("WholeGenomeGermlineSingleSample_v2.0"),r("OutboundLink")],1)]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("June 22, 2020")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[r("a",{attrs:{href:"mailto:ekiernan@broadinstitute.org"}},[e._v("Elizabeth Kiernan")])]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("Please file GitHub issues in WARP or contact "),r("a",{attrs:{href:"mailto:kdegatano@broadinstitute.org"}},[e._v("Kylee Degatano")])])])])]),e._v(" "),r("p",[e._v("The Whole Genome Germline Single Sample pipeline implements data pre-processing and initial variant calling according to the GATK Best Practices (June 2016) for germline SNP and Indel discovery in human whole-genome sequencing data. For a broad overview of the pipeline processes, read the GATK Best Practices documentation for "),r("a",{attrs:{href:"https://gatk.broadinstitute.org/hc/en-us/articles/360035535912",target:"_blank",rel:"noopener noreferrer"}},[e._v("data pre-processing"),r("OutboundLink")],1),e._v(" and for "),r("a",{attrs:{href:"https://gatk.broadinstitute.org/hc/en-us/articles/360035535932",target:"_blank",rel:"noopener noreferrer"}},[e._v("germline short variant discovery"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"set-up"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#set-up"}},[e._v("#")]),e._v(" Set-up")]),e._v(" "),r("h3",{attrs:{id:"workflow-installation-and-requirements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#workflow-installation-and-requirements"}},[e._v("#")]),e._v(" Workflow Installation and Requirements")]),e._v(" "),r("p",[e._v("The "),r("a",{attrs:{href:"https://github.com/broadinstitute/warp/blob/develop/pipelines/broad/dna_seq/germline/single_sample/wgs/WholeGenomeGermlineSingleSample.wdl",target:"_blank",rel:"noopener noreferrer"}},[e._v("Whole Genome Germline Single Sample workflow"),r("OutboundLink")],1),e._v(" is written in the Workflow Description Language "),r("a",{attrs:{href:"https://openwdl.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("WDL"),r("OutboundLink")],1),e._v(" and can be downloaded by cloning the GitHub repository "),r("a",{attrs:{href:"https://github.com/broadinstitute/warp/",target:"_blank",rel:"noopener noreferrer"}},[e._v("WARP"),r("OutboundLink")],1),e._v(". The workflow can be deployed using "),r("a",{attrs:{href:"https://github.com/broadinstitute/cromwell",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cromwell"),r("OutboundLink")],1),e._v(", a GA4GH compliant, flexible workflow management system that supports multiple computing platforms. For the latest workflow version and release notes, please see the Whole Genome Germline Single Sample "),r("a",{attrs:{href:"https://github.com/broadinstitute/warp/blob/develop/pipelines/broad/dna_seq/germline/single_sample/wgs/WholeGenomeGermlineSingleSample.changelog.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("changelog"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h3",{attrs:{id:"software-version-requirements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#software-version-requirements"}},[e._v("#")]),e._v(" Software Version Requirements")]),e._v(" "),r("ul",[r("li",[e._v("GATK 3.5 and GATK 4.beta.5")]),e._v(" "),r("li",[e._v("Picard 2.20.0-SNAPSHOT")]),e._v(" "),r("li",[e._v("Samtools 1.3.1")]),e._v(" "),r("li",[e._v("Python 2.7 and 3.0")]),e._v(" "),r("li",[e._v("Cromwell version support\n"),r("ul",[r("li",[e._v("Successfully tested on v47")]),e._v(" "),r("li",[e._v("Does not work on versions < v23 due to output syntax")])])])]),e._v(" "),r("h3",{attrs:{id:"input-requirements-and-expectations"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#input-requirements-and-expectations"}},[e._v("#")]),e._v(" Input Requirements and Expectations")]),e._v(" "),r("ul",[r("li",[e._v("Human whole-genome paired-end sequencing data in unmapped BAM (uBAM) format")]),e._v(" "),r("li",[e._v("One or more read groups, one per uBAM file, all belonging to a single sample (SM)")]),e._v(" "),r("li",[e._v("Input uBAM files must additionally comply with the following requirements:\n"),r("ul",[r("li",[e._v('All filenames have the same suffix (we use ".unmapped.bam")')]),e._v(" "),r("li",[e._v("Files pass validation by ValidateSamFile")]),e._v(" "),r("li",[e._v("Reads are in query-sorted order")]),e._v(" "),r("li",[e._v("All reads have an RG tag")])])]),e._v(" "),r("li",[e._v("Reference genome must be Hg38 with ALT contigs")])]),e._v(" "),r("h2",{attrs:{id:"workflow-tasks-and-tools"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#workflow-tasks-and-tools"}},[e._v("#")]),e._v(" Workflow Tasks and Tools")]),e._v(" "),r("p",[e._v("The Whole Genome Germline Single Sample "),r("a",{attrs:{href:"https://github.com/broadinstitute/warp/blob/develop/pipelines/broad/dna_seq/germline/single_sample/wgs/WholeGenomeGermlineSingleSample.wdl",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),r("OutboundLink")],1),e._v(" imports a series of tasks from the "),r("a",{attrs:{href:"https://github.com/broadinstitute/warp/tree/develop/tasks/broad",target:"_blank",rel:"noopener noreferrer"}},[e._v("tasks library"),r("OutboundLink")],1),e._v(" and a DNASeq struct ("),r("a",{attrs:{href:"https://github.com/broadinstitute/warp/blob/develop/structs/dna_seq/DNASeqStructs.wdl",target:"_blank",rel:"noopener noreferrer"}},[e._v("DNASeqStructs.wdl"),r("OutboundLink")],1),e._v(") containing reference files from the "),r("a",{attrs:{href:"https://github.com/broadinstitute/warp/tree/develop/structs",target:"_blank",rel:"noopener noreferrer"}},[e._v("structs library"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("You can read more about the software tools implemented in these tasks by reading the GATK "),r("a",{attrs:{href:"https://gatk.broadinstitute.org/hc/en-us/articles/360035535912",target:"_blank",rel:"noopener noreferrer"}},[e._v("data pre-processing"),r("OutboundLink")],1),e._v(" and "),r("a",{attrs:{href:"https://gatk.broadinstitute.org/hc/en-us/articles/360035535932",target:"_blank",rel:"noopener noreferrer"}},[e._v("germline short variant discovery"),r("OutboundLink")],1),e._v(" documentation.")]),e._v(" "),r("h2",{attrs:{id:"workflow-outputs"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#workflow-outputs"}},[e._v("#")]),e._v(" Workflow Outputs")]),e._v(" "),r("ul",[r("li",[e._v("CRAM, CRAM index, and CRAM MD5")]),e._v(" "),r("li",[e._v("GVCF and its GVCF index")]),e._v(" "),r("li",[e._v("BQSR report")]),e._v(" "),r("li",[e._v("Summary metrics; to read more about any particular metric, you can search the metric using the "),r("a",{attrs:{href:"https://gatk.broadinstitute.org/hc/en-us/categories/360002302312",target:"_blank",rel:"noopener noreferrer"}},[e._v("GATK documentation search"),r("OutboundLink")],1)])]),e._v(" "),r("h2",{attrs:{id:"important-notes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#important-notes"}},[e._v("#")]),e._v(" Important Notes")]),e._v(" "),r("ul",[r("li",[e._v("The accompanying JSON is a generic, ready to use, example template for the workflow. It is the user’s responsibility to correctly set the reference and resource variables for their own particular test case using the "),r("a",{attrs:{href:"https://gatk.broadinstitute.org/hc/en-us/categories/360002310591",target:"_blank",rel:"noopener noreferrer"}},[e._v("GATK Tool and Tutorial Documentations"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("li",[e._v("Runtime parameters are optimized for Broad's Google Cloud Platform implementation.")]),e._v(" "),r("li",[e._v("For help running workflows on the Google Cloud Platform or locally please\nview the following tutorial "),r("a",{attrs:{href:"https://gatk.broadinstitute.org/hc/en-us/articles/360035530952",target:"_blank",rel:"noopener noreferrer"}},[e._v("(How to) Execute Workflows from the gatk-workflows Git Organization"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("li",[e._v("Please visit the "),r("a",{attrs:{href:"https://gatk.broadinstitute.org/hc/en-us/categories/360002310591",target:"_blank",rel:"noopener noreferrer"}},[e._v("GATK Technical Documentation"),r("OutboundLink")],1),e._v(" site for further documentation on our workflows and tools.")]),e._v(" "),r("li",[e._v("You can access relevant reference and resource bundles in the "),r("a",{attrs:{href:"https://gatk.broadinstitute.org/hc/en-us/articles/360035890811",target:"_blank",rel:"noopener noreferrer"}},[e._v("GATK Resource Bundle"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("h2",{attrs:{id:"contact-us"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#contact-us"}},[e._v("#")]),e._v(" Contact Us")]),e._v(" "),r("p",[e._v("This material is provided by the Data Sciences Platform group at the Broad Institute. Please direct any questions or concerns to one of our forum sites: "),r("a",{attrs:{href:"https://gatk.broadinstitute.org/hc/en-us/community/topics",target:"_blank",rel:"noopener noreferrer"}},[e._v("GATK"),r("OutboundLink")],1),e._v(" or "),r("a",{attrs:{href:"https://support.terra.bio/hc/en-us/community/topics/360000500432",target:"_blank",rel:"noopener noreferrer"}},[e._v("Terra"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"licensing"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#licensing"}},[e._v("#")]),e._v(" Licensing")]),e._v(" "),r("p",[e._v("Copyright Broad Institute, 2020 | BSD-3")]),e._v(" "),r("p",[e._v("This workflow is released under the WDL open source code license (BSD-3) (full license text at https://github.com/broadinstitute/warp/blob/master/LICENSE). However, please note that the programs it calls may be subject to different licenses. Users are responsible for checking that they are authorized to run all programs before running this script.")]),e._v(" "),r("p",[e._v("Programs include:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://software.broadinstitute.org/gatk/download/licensing.php",target:"_blank",rel:"noopener noreferrer"}},[e._v("GATK"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"http://bio-bwa.sourceforge.net/bwa.shtml#13",target:"_blank",rel:"noopener noreferrer"}},[e._v("BWA"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://broadinstitute.github.io/picard/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Picard"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"http://www.htslib.org/terms/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Samtools"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=n.exports}}]);