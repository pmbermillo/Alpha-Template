<template>
    <div style="margin: 10px;">
        <h1>Overlay</h1>
        <div>
            <ACard>
                <ACardHeader>DEFAULT</ACardHeader>
                <ACardBody>
                    <b-row style="text-align:center;">
                        <b-col>    
                          <b-card title="SAMPLE" aria-hidden="true">
                              <AOverlay size="sm" :visibility="this.loader_1">
                              </AOverlay>
                              <b-card-text>SAMPLE
                              </b-card-text>
                            </b-card>
                        </b-col>
                        <b-col>
                            <b-card title="SAMPLE" aria-hidden="true">
                              <AOverlay size="md"  :visibility="this.loader_2">
                              </AOverlay>
                              <b-card-text>SAMPLE
                              </b-card-text>
                            </b-card> 
                        </b-col>
                        <b-col>
                            <b-card title="SAMPLE" aria-hidden="true">
                              <AOverlay size="lg"  :visibility="this.loader_1">
                              </AOverlay>
                              <b-card-text>SAMPLE
                              </b-card-text>
                            </b-card> 
                        </b-col>
                    </b-row>
                </ACardBody>
            </ACard>
        </div>
        <div>
            <ACard>
                <ACardHeader>Primary</ACardHeader>
                <ACardBody>
                    <b-row style="text-align:center;">
                        <b-col>    
                          <b-card title="SAMPLE" aria-hidden="true">
                              <AOverlay size="sm" variant="primary" :visibility="this.loader_1">
                              </AOverlay>
                              <b-card-text>SAMPLE
                              </b-card-text>
                            </b-card>
                        </b-col>
                        <b-col>
                            <b-card title="SAMPLE" aria-hidden="true">
                              <AOverlay size="md" variant="primary" :visibility="this.loader_2">
                              </AOverlay>
                              <b-card-text>SAMPLE
                              </b-card-text>
                            </b-card> 
                        </b-col>
                        <b-col>
                            <b-card title="SAMPLE" aria-hidden="true">
                              <AOverlay size="lg" variant="primary" :visibility="this.loader_1">
                              </AOverlay>
                              <b-card-text>SAMPLE
                              </b-card-text>
                            </b-card> 
                        </b-col>
                    </b-row>
                </ACardBody>
            </ACard>
        </div>
        <div>
            <ACard>
                <ACardHeader>Success</ACardHeader>
                <ACardBody>
                    <b-row style="text-align:center;">
                        <b-col>    
                          <b-card title="SAMPLE" aria-hidden="true">
                              <AOverlay size="sm" variant="success" :visibility="this.loader_1">
                              </AOverlay>
                              <b-card-text>SAMPLE
                              </b-card-text>
                            </b-card>
                        </b-col>
                        <b-col>
                            <b-card title="SAMPLE" aria-hidden="true">
                              <AOverlay size="md" variant="success" :visibility="this.loader_1">
                              </AOverlay>
                              <b-card-text>SAMPLE
                              </b-card-text>
                            </b-card> 
                        </b-col>
                        <b-col>
                            <b-card title="SAMPLE" aria-hidden="true">
                              <AOverlay size="lg" variant="success" :visibility="this.loader_1">
                              </AOverlay>
                              <b-card-text>SAMPLE
                              </b-card-text>
                            </b-card> 
                        </b-col>
                    </b-row>
                </ACardBody>
            </ACard>
        </div>
        <div>
            <ACard>
                <ACardHeader>Info</ACardHeader>
                <ACardBody>
                    <b-row style="text-align:center;">
                        <b-col>    
                          <b-card title="SAMPLE" aria-hidden="true">
                              <AOverlay size="sm" variant="info" :visibility="this.loader_1">
                              </AOverlay>
                              <b-card-text>SAMPLE
                              </b-card-text>
                            </b-card>
                        </b-col>
                        <b-col>
                            <b-card title="SAMPLE" aria-hidden="true">
                              <AOverlay size="md" variant="info" :visibility="this.loader_1">
                              </AOverlay>
                              <b-card-text>SAMPLE
                              </b-card-text>
                            </b-card> 
                        </b-col>
                        <b-col>
                            <b-card title="SAMPLE" aria-hidden="true">
                              <AOverlay size="lg" variant="info" :visibility="this.loader_1">
                              </AOverlay>
                              <b-card-text>SAMPLE
                              </b-card-text>
                            </b-card> 
                        </b-col>
                    </b-row>
                </ACardBody>
            </ACard>
        </div>
        <div>
            <ACard>
                <ACardHeader>Warning</ACardHeader>
                <ACardBody>
                    <b-row style="text-align:center;">
                        <b-col>    
                          <b-card title="SAMPLE" aria-hidden="true">
                              <AOverlay size="sm" variant="warning" :visibility="this.loader_1" class="sample">
                              </AOverlay>
                              <b-card-text>SAMPLE
                              </b-card-text>
                            </b-card>
                        </b-col>
                        <b-col>
                            <b-card title="SAMPLE" aria-hidden="true">
                              <AOverlay size="md" variant="warning" :visibility="this.loader_1">
                              </AOverlay>
                              <b-card-text>SAMPLE
                              </b-card-text>
                            </b-card> 
                        </b-col>
                        <b-col>
                            <b-card title="SAMPLE" aria-hidden="true">
                              <AOverlay size="lg" variant="warning" :visibility="this.loader_1">
                              </AOverlay>
                              <b-card-text>SAMPLE
                              </b-card-text>
                            </b-card> 
                        </b-col>
                    </b-row>
                </ACardBody>
            </ACard>
        </div>
        <ACard> 
          <ACardHeader>Overlay Props</ACardHeader>
          <ACardBody>
            <label style="font-weight: bold">size : </label>
            <label>sm md lg</label>
            <br>
            <label style="font-weight: bold">variant : </label>
            <label>primary warning info success</label>
            <br>
            <label style="font-weight: bold">visibility : </label>
            <label>true false</label>
            <br>
            <label style="font-weight: bold">classname : </label>
            <label>your_class_name</label>
            <br>
            <label style="font-weight: bold">id : </label>
            <label>your_id</label>
            <pre>
              <b>Sample Code:</b>
              <span style="color:blue">&lt;AOverlay size="sm" variant="warning"&gt;</span>
            </pre>
      </ACardBody>
    </ACard>
    </div>
</template>

<script>
export default {
      name: "Overlay",
      data (){
        return {
          loader_1: true,
          loader_2: false,
        }
      },
    }
</script>

<style lang="scss">

</style>
