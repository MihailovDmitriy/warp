(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{400:function(e,t,a){"use strict";a.r(t);var r=a(25),i=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"smart-seq2-multi-sample-overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#smart-seq2-multi-sample-overview"}},[e._v("#")]),e._v(" Smart-seq2 Multi Sample Overview")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[e._v("Pipeline Version")]),e._v(" "),a("th",{staticStyle:{"text-align":"center"}},[e._v("Date Updated")]),e._v(" "),a("th",{staticStyle:{"text-align":"center"}},[e._v("Documentation Author")]),e._v(" "),a("th",{staticStyle:{"text-align":"center"}},[e._v("Questions or Feedback")])])]),e._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("a",{attrs:{href:"https://github.com/broadinstitute/warp/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("MultiSampleSmartSeq2_v2.1.0"),a("OutboundLink")],1)]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("August, 2020")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("a",{attrs:{href:"mailto:ekiernan@broadinstitute.org"}},[e._v("Elizabeth Kiernan")])]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("Please file GitHub issues in skylab or contact "),a("a",{attrs:{href:"mailto:kdegatano@broadinstitute.org"}},[e._v("Kylee Degatano")])])])])]),e._v(" "),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),a("p",[e._v("The Smart-seq2 Multi Sample pipeline is a wrapper around the "),a("RouterLink",{attrs:{to:"/documentation/Pipelines/Smart-seq2_Single_Sample_Pipeline/"}},[e._v("Smart-seq2 Single Sample")]),e._v(" pipeline. It is developed by the Data Coordination Platform of the Human Cell Atlas to process single-cell RNAseq (scRNAseq) data generated by Smart-seq2 assays. The workflow processes multiple cells by importing and running the "),a("a",{attrs:{href:"https://github.com/broadinstitute/warp/blob/master/pipelines/skylab/smartseq2_single_sample/SmartSeq2SingleSample.wdl",target:"_blank",rel:"noopener noreferrer"}},[e._v("Smart-seq2 Single Sample workflow"),a("OutboundLink")],1),e._v(" for each individual cell and then merging the resulting Loom output files into a single Loom file.")],1),e._v(" "),a("p",[e._v("Full details about the Smart-seq2 pipeline can be read in the "),a("RouterLink",{attrs:{to:"/documentation/Pipelines/Smart-seq2_Single_Sample_Pipeline/"}},[e._v("Smart-seq2 Single Sample documentation")]),e._v(" in GitHub.")],1),e._v(" "),a("p",[e._v("The Multi Sample Smart-seq2 workflow can also be run in "),a("a",{attrs:{href:"https://app.terra.bio",target:"_blank",rel:"noopener noreferrer"}},[e._v("Terra"),a("OutboundLink")],1),e._v(", a cloud-based analysis platform. The Terra "),a("a",{attrs:{href:"https://app.terra.bio/#workspaces/featured-workspaces-hca/HCA%20Smart-seq2%20Multi%20Sample%20Pipeline",target:"_blank",rel:"noopener noreferrer"}},[e._v("Smart-seq2 public workspace"),a("OutboundLink")],1),e._v(" contains the Smart-seq2 workflow, workflow configurations, required reference data and other inputs, and example testing data.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Want to use the Smart-seq2 Multi Sample pipeline for your publication?")]),e._v(" "),a("p",[e._v("Check out the "),a("RouterLink",{attrs:{to:"/documentation/Pipelines/Smart-seq2_Multi_Sample_Pipeline/smart-seq2.methods.html"}},[e._v("Smart-seq2 Publication Methods")]),e._v(" to get started!")],1)]),e._v(" "),a("h2",{attrs:{id:"inputs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inputs"}},[e._v("#")]),e._v(" Inputs")]),e._v(" "),a("p",[e._v("There are two example configuration (JSON) files available for testing the Multi Sample workflow. Both examples are also preloaded in the Terra "),a("a",{attrs:{href:"https://app.terra.bio/#workspaces/featured-workspaces-hca/HCA%20Smart-seq2%20Multi%20Sample%20Pipeline",target:"_blank",rel:"noopener noreferrer"}},[e._v("Smart-seq2 public workspace"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/broadinstitute/warp/blob/master/pipelines/skylab/smartseq2_multisample/human_single_example.json",target:"_blank",rel:"noopener noreferrer"}},[e._v("human_single_example.json"),a("OutboundLink")],1),e._v(": Configurations for an example single-end human dataset consisting of two samples (cells)")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/broadinstitute/warp/blob/master/pipelines/skylab/smartseq2_multisample/mouse_paired_example.json",target:"_blank",rel:"noopener noreferrer"}},[e._v("mouse_paired_example.json"),a("OutboundLink")],1),e._v(": Configurations for an example paired-end mouse dataset consisting of two samples (cells)")])]),e._v(" "),a("h3",{attrs:{id:"sample-data-input"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sample-data-input"}},[e._v("#")]),e._v(" Sample Data Input")]),e._v(" "),a("p",[e._v("The sample data inputs are similar to those specified in the "),a("a",{attrs:{href:"https://github.com/broadinstitute/warp/blob/master/pipelines/skylab/smartseq2_single_sample/README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Smart-seq2 Single Sample README"),a("OutboundLink")],1),e._v(". The Smart-seq2 Multi Sample workflow processes both single- and paired-end samples; however, these samples can not be mixed in the same run.")]),e._v(" "),a("p",[e._v("For the Multi Sample workflow, FASTQ files must be located in a cloud-accessible folder.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Input name")]),e._v(" "),a("th",[e._v("Input Description")]),e._v(" "),a("th",[e._v("Input Type")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("fastq1_input_files")]),e._v(" "),a("td",[e._v("Cloud locations for each read1 file")]),e._v(" "),a("td",[e._v("Array of strings")])]),e._v(" "),a("tr",[a("td",[e._v("fastq2_input_files (optional)")]),e._v(" "),a("td",[e._v("Cloud locations for each read2 file if running paired-end samples")]),e._v(" "),a("td",[e._v("Array of strings")])]),e._v(" "),a("tr",[a("td",[e._v("input_ids")]),e._v(" "),a("td",[e._v("Unique identifiers for each sample")]),e._v(" "),a("td",[e._v("Array of strings")])])])]),e._v(" "),a("h3",{attrs:{id:"additional-input"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#additional-input"}},[e._v("#")]),e._v(" Additional Input")]),e._v(" "),a("p",[e._v('The reference inputs are identical to those specified in the "Additional Reference Inputs" section of the '),a("a",{attrs:{href:"https://github.com/broadinstitute/warp/blob/master/pipelines/skylab/smartseq2_single_sample/README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Smart-seq2 Single Sample README"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("In addition to the Smart-seq2 Single Sample inputs, the Multi Sample workflow has the following inputs:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Input name")]),e._v(" "),a("th",[e._v("Input Description")]),e._v(" "),a("th",[e._v("Input Type")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("bacth_id")]),e._v(" "),a("td",[e._v("Identifier for the batch of multiple samples")]),e._v(" "),a("td",[e._v("String")])]),e._v(" "),a("tr",[a("td",[e._v("batch_name")]),e._v(" "),a("td",[e._v("Optional string to describe the batch or biological sample")]),e._v(" "),a("td",[e._v("String")])])])]),e._v(" "),a("h3",{attrs:{id:"smart-seq2-multi-sample-task-summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#smart-seq2-multi-sample-task-summary"}},[e._v("#")]),e._v(" Smart-seq2 Multi Sample Task Summary")]),e._v(" "),a("p",[e._v("The Smart-seq2 Multi Sample pipeline calls three tasks:")]),e._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://github.com/broadinstitute/warp/blob/master/pipelines/skylab/smartseq2_single_sample/SmartSeq2SingleSample.wdl",target:"_blank",rel:"noopener noreferrer"}},[e._v("SmartSeq2SingleSample.wdl"),a("OutboundLink")],1),e._v(": a task that runs the Smart-seq2 Single Sample workflow")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/broadinstitute/warp/blob/master/tasks/SmartSeq2PlateAggregation.wdl",target:"_blank",rel:"noopener noreferrer"}},[e._v("SmartSeq2PlateAggregation.wdl"),a("OutboundLink")],1),e._v(": the wrapper pipeline that checks the inputs, initiates per cell processing and aggregates the results")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/broadinstitute/warp/blob/master/tasks/LoomUtils.wdl",target:"_blank",rel:"noopener noreferrer"}},[e._v("LoomUtils.wdl"),a("OutboundLink")],1),e._v(": a task that produces the Loom file output")])]),e._v(" "),a("h3",{attrs:{id:"outputs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#outputs"}},[e._v("#")]),e._v(" Outputs")]),e._v(" "),a("p",[e._v("The following table lists the outputs of the Smart-seq2 Multi Sample workflow.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Output file name")]),e._v(" "),a("th",[e._v("Output Description")]),e._v(" "),a("th",[e._v("Output Type")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("bam_files")]),e._v(" "),a("td",[e._v("An array of genome-aligned BAM files (one for each sample) generated with HISAT2")]),e._v(" "),a("td",[e._v("Array")])]),e._v(" "),a("tr",[a("td",[e._v("bam_index_files")]),e._v(" "),a("td",[e._v("An array of BAM index files generated with HISAT2")]),e._v(" "),a("td",[e._v("Array")])]),e._v(" "),a("tr",[a("td",[e._v("loom_output")]),e._v(" "),a("td",[e._v("A single Loom file")]),e._v(" "),a("td",[e._v("File")])])])]),e._v(" "),a("p",[e._v("The Loom file is an aggregate of all the individual Loom files generated using the "),a("a",{attrs:{href:"https://github.com/broadinstitute/warp/blob/master/pipelines/skylab/smartseq2_single_sample/SmartSeq2SingleSample.wdl",target:"_blank",rel:"noopener noreferrer"}},[e._v("Smart-seq2 Single Sample workflow"),a("OutboundLink")],1),e._v(". The aggregated Loom filename contains the "),a("code",[e._v("plateid")]),e._v(" prefix, which is set by default to the "),a("code",[e._v("batch_id")]),e._v(" string specified in the input. The "),a("code",[e._v("plateid")]),e._v(" is also set as a global attribute in the Loom.")]),e._v(" "),a("p",[e._v("Both the individual sample Loom files and individual BAM files are described in the "),a("RouterLink",{attrs:{to:"/documentation/Pipelines/Smart-seq2_Single_Sample_Pipeline/"}},[e._v("Smart-seq2 Single Sample README")]),e._v(".")],1),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("Zarr Array Deprecation Notice June 2020")]),e._v(" "),a("p",[e._v("Please note that we have deprecated the previously used Zarr array output. The pipeline now uses the Loom file format as the default output.")])]),e._v(" "),a("h2",{attrs:{id:"versioning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#versioning"}},[e._v("#")]),e._v(" Versioning")]),e._v(" "),a("p",[e._v("Release information for the Smart-seq2 Multi Sample Pipeline can be found in the "),a("a",{attrs:{href:"https://github.com/broadinstitute/warp/blob/master/pipelines/skylab/smartseq2_multisample/MultiSampleSmartSeq2.changelog.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("changelog"),a("OutboundLink")],1),e._v(". Please note that any major changes to the Smart-seq2 pipeline will be documented in the "),a("a",{attrs:{href:"https://github.com/broadinstitute/warp/blob/master/pipelines/skylab/smartseq2_single_sample/SmartSeq2SingleSample.changelog.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Smart-seq2 Single Sample changelog"),a("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=i.exports}}]);