import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Button, Card, Row, Col, Container } from "react-bootstrap";
import "./styles/Frachise.css";
import axios from "axios";

function Franchise(props) {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get(
        "https://franchise-hub-server.herokuapp.com/api/v1/webview/section/listed-franchises/all"
      );
      console.log(response.data);
      setData(response.data.payload);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  var items = data.map((item) => item);
  var sliceitem = items.slice(0, 3);
  console.log(sliceitem)

  return sliceitem.map((item) => {
    return (
      <div className="franchise">
        <Card className="custom-card">
          <Card.Body>
            <Card.Img
              variant="top"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAABKVBMVEUmZ50AAADkvognaqLm5ubowIcYQWPswocAYJ4jZp0iXIwZQ2ftw4cTNFAoa6TnwIgfVID35skSMEocTHQQYp4QK0KsoZDMzMwWPFsiW4sgV4QkYZTdu4kcS3IOJjoaR2zW1tb/7czw8PALHy9GcpsFDRQNIzbLsYu+qo1ngJhBcZuKkJQxa5wAXp/v1a4JGCXt4MedmZLQtItce5l3h5ann5C+q42GjpXkxptWVlZtbW09PT0hISFti6h9lqy+wLvc1MLy3Lirs7ZUfqTOy7+WlpMAWKCeq7PNqnqQeFZBNicwKB2jtsm2xtdjUzt8fHyih2Dl3dIgICD23bafn58ACiY2NjZycnJLS0sAHUUhMj8AEzrexJxrZFsAGzV+aUsvRFUAMl6Kd1yPDEQtAAAUm0lEQVR4nO2dC2PaNrvHfakvAoMdMKnBBJIAAQK5hyS9rGuT0rXb2vXd23XdOTtvz873/xBHkiVbtmWbgNvc/O/WAiay9POjR88jyY4gFCpUqFChQoUKFSpUqFChQoUKFSpUqFChQoUKFSpUqFChQoUKFSpUqFChQoUKfQMB+aZrcOskC45703W4VZLlltoQD266GrdHsuyWHau6IVbKN12VWyJZ2HA24N/yhlirqjddm1sgWbYc1ZVlIGAmsuzcdI1uVgD2GdWxZDLcYCbCw4YiC13cZ/z3ZbEB3z1gKLKllt1qVQ5UFcVB9SFDKe101K5TrnThn7KjOqrqVERRrFhuyXVrN127m1HLUq1KqeOiP42WY6l1kdGdit3kvMLvVqW+Ue/Wuxb8A19BOQeNWm1gWQ6UAHI6zXeQ3D2whFywNOueE0FxCXEnqlOt1KrdO2YnstUQS91yE4cTq5VU2QGRMmSnfNC8TUxAtIY8yXVXFVGUVe66KxoLHGNK0dLVTteJM1moZt9CtvCDnXlqud6qOiLq6rJQV+ur9aGSGv1xGWY8dRiguFDBp8D+Adbu+wvsvVjbOsy6HrIF+4zHBL1zu+XWCh5XtqzoJyocgWqREgE43Fp7sffdTQXoP26trW2d6anfwkiqDbFOw6xqtdndWLYP1UtCN/KjslMXhUbkQ/0MVe1H/ZtBAbrO6SEAvITnXbswrlJPbDlW3WoMxF6jjAIs/J+qdsrLQZG7sVkB2ekIUTsBV8YFrNvWS44RA1tfHRX44fDlLDbyAx0heSVJ2kk6k97Ozg4OqMq1slorl2uqWnO6MbewoOLdjvqTUOVONEl6haDEmg+E2cvDH1aFoh+urWnRHgLAULnYv5Agk2naCeT64GDgbqhyR5BZLcuEcwZodE7UTqaQiQTrpwyjlqKfaWtrh+n9PVPgCtqDZIRbDoRjRcLS1lPdO0zk4fBZ7zbCuYiV32yhF59EENvrmlc95Ths4WBqSNB+0vt7puwXiIm2y5Zi77YVes70cQcyGUAmNasX+rQrunm5P9lRYRwbG3foNVPau+xFA7saYvJitXHa/mlrbd9UQkjGikms5CyEhOO/4DhTletONcQEpnL59R3IxKlFxwEAzoilmMo4BEUx99e2flqRyfoFdBttpgfq54ZELsKQRQD03cvDNY7/kuv1g0rogw05GmYsLcik16r9sHZ4uRuuzJBYimScs5VvQ0dzkd7hM6UfQ5swh0Gx+pGP5Ji5NkC/er21xfVfcr1RCjuQZjm/vqM2yupfcBzY2np9xVAB9rEP5Yip/RA153g1JwuQDSo+WKBT9yWZ7cB/ARt8QuHK2tr+Xrza9Yrs9R25WfI6zcrZYFA4Ws34ax+fe+sTCK4SENqkh8OBwIdlryNS2kqnx0O9pMwJE2CPAiT+WAR7zcxUYL1eXUgGt+8MvL7j9ipWTrMGfuE4ZtOkCxiP7CvmLOhBYBpAOaOs7Dlmkh5UZYiUceoxgWGJj0QiSIBtj88MxSfF6zs1AfedZqsCA1ir3lqhQrHCUWz/l996xTgb2wQAmEo+FBqo2Keha7yU9BEqlgTwwRAHT4bHODjSnBy1NXpq6OU5VwAycRETt1WtqShic636qrMGQeHqDswBT5SgClr76MQbhexdHwoNGmDYj74zWsWhAK9EXGAQqUmm2bexhaxLvongyzHlXADSd1zVglGt2t3YgP9V8ppQ9mJ7e+obMDYWaR1bi903AyjY+wHgVXeFvgNOMFbspxlPbkp9G9jTeZsFIpnGnJteER/bPOg5nY6DmMD/yzlNisHYfgPG9kCfG6bEYmnPp7COfcZSsO3gcVQyVnAonjtRRujq20O24+i76xoLBBrJcZ/fS2HfQWNxSxTd2g6dM+jmFKGg2L6E4li7f6yF6qNo67s6232GuBUjZUWHgodzSTmCJQSDsGTu6kKUiKJMknJweWOjh/pOve46Dl3R7OZlJ45DYnugT5RInbR1Qd/1zQcOyZDJEfoOG3BdU0DAHLRzGzpswy/7ZO/UDJ/dNEY8T0Kq7cX2aJ230aO+tZ6bnaDY3ivVno5CHQhSMU/3TvxracDh0z73mrT0uoc3cqHhHAhBH5m8mRmhM5vG8CRlogb2nboXxwZ2kpsgk50WzQGBfjKMUDFmbyZBn4I+1kNEo4vry4v6JK0P9JnvTIZvRqGOC4mMU6eu5Hq54w0zbq2TOxO1oapBXgz0cYSKNnoz9F0KDGj7mvdqaSZtr1gA+kHPmZ6xSEzjLM1GcLVh3+ngV26lkr+dwNienSuAtnIWoqKdTYPe0wfAe9NekgmagcHt1vURNRNlHrKSbCJ4LO56+Y4bm+lYWZz5WEwlZClzv/YjXfd4Ganzg8kCY9x883gvMBPpjPGuSpvXa0BkwUmuqxViJ7XoDPvKwrF9bE5JH7fZap4F17C/hwMUSRsvx8SLTrAHCc7AmCXMIkLzNTCwtXVdB9Mp0JkDkAntO3n7WFsH6n+5//2XDs8cuhA2YAPboM4K9S7LRijExSqjaTga8m1S99NACAP0x5PZaPj3FtIhM5UF/Ymzg1+5jZ1cmdg/HeKz/T0czSZjOBKgipA66SN+pafe9V3WyeoE6exI4ZXuJVKwFlen89mobRqapsBcbM2bywj6K/QnKmGSr52AqTdnswZzT0XTDLM9ms1Pr2CNcO25UJSjGTH+5aI2nRbDBY7XN2z7dKQYmEWgi/39fZNl4o87nV6+TEx4pgvmzIiNoYxOMRX9jGsp9AIvxQRNcmMdm/GSYfYA804wYSYKQoeZ6T3oT2oN/Mp18h2L9WOeAaPpgglAefuQc9g8Jtd0dxknS4YdrlCWadsTKekbbOJZtSr1HtqGl3vM5qXtPGnSBHoWm8/M+8ZSAw9JDXgy29Dln7YTjiuawoTOsjgYHAwGaLzM204E+39Mk2unsM3tUzj4tROOekncEiecJVE2pekezCx4R2B/bq+fswlh1duAV6sKgtXoRPfUrCS5+h/x60fYfbkth1nY3lRKgqLMlmIySirPnArrRvygaSrH66dT3WbXn5pka+JO3ZXRv7kBgUg6A1z07x8+vuXZi2msC9PENoyWYaLzfCtG3I/OVCAepvTx6//+889Gvcku/8uqv1WzUcH2wuk9LYsoMntNP2bmWkreJ17ZO8E+0F++fpTiXBRl0k8w9uUWeUgGGNfRcdSRmObbdz8HFdyp+1QYJkSVUnR1Rw4OhqY1Sn55PkdaXBO/aYRL/vnd2xgV7ZgbSUhLZoEgyalHT6yYH3+JNHxAV4TjTKDBRE7UCg7VWSvymYhWFDF2S3IlVvQvH6OVS/LBvJWobCT9JCaRk2qzQbzdItmKxGMiDkITj7ITHKnxmQwWZQIVo5LEpH99KPYkOTxhix72dV7VyLXlMhEP2KbLLFK2BgETsRsxuxQm4i9vF4KiTa7fefThAkUr0jlMBOnV7PV2DiLXNmAy6AXHRHZDG9N0UWS9LHuAbpxcgIkofpWSYzVfS2Q8fmSfJjI1TapSQgsVwgatmcU2ooEXMaxeCBjbTDKGVBJgVcJdMcSk46JdppYaMO+NFuj314/ubW4yHDYS5dSbLSA1wYMBkKnLxJvWfCae1cgdcjDwKLLHqU5alGRAbjKTmjeQyXJwl8Y/p7FoIV79o+t2Hjubs78SyjKBgStpnRNnAsN71ojYT9xKqJAYk06oK0aYULyC75rCq6UJuiaTTA9rGsEiV5gJDRs4dhI41GB0JX2N/stsiSRMSHGtbCYBcuiU9Qkn1A5f1Gt62cSAjUhpMyuhETuhzWYb4TM5iNgJ6U2dKmnOQYyJxRzIYkLJir2qYPfbGf3nemFbSk7sIT5jc5oQk2rZexcedwgTf4yi/gQA731Zpl0u8DSESYs0fUPGd0SmMgliYngqYPNnlYJWXCs31tPNxDgKzdfTduLNJXSAtHhMaJt8a5AtypOGbsGOemontEMAgLaRZjDxT4+AB5vvEgzlGsNxhplAVxL6OrXXnZ2e7+Q2woMnZhKMDH4MT9sg+yH+TpTJRpUMVtBpZzOhZ/DOD51KXoaS7k2MeQSvGFOvGQk8O6Vm0+rS8CSYbpODZlGz9/NAykRukiNuNhMhFAlAKPNUKIt7FHueZibKetTiOEiqtM282L4XpL+twG7kWsSGCJOuH9VUfENLZkIHcLpCoK+nOVpt0WUeAFIHsXbs1hVes0vhvsOKWdCgTgQ5VtreRoyJ4BvK9ZmAdJs3F7xJLj2E5WxT4DBJyQF9GxL8+I4scZAv0GoGTKoN2lAri0mk7/gbRpKMfrFgFkxTh3WOr6aXplxWK0HSUUpgIjK77UmzHXQ7nwuIu7HCB1G+SIce2uRkH0ugMTMx6WOostBienoPVDjzmBQC3qnm0pTmoJrAJIjf6dAcFs0DGSa0+Wopiwk9X5Bg26PU9sS8I0dgN9VT8xZaw03187yWEBqLQbNGafkjMR2Iwooz8c8hZDGhJQZu3E69xpKxQHqsp2JN6zv08lM3h7p0wAR6iSq9iFbkJyNqxZnQcrJ8LO1kvcBpZcSfSvYG4uS1Nco13gEjTGigUQkxwUcG7DtBDj2CIRAZM1gmNCkgk1ZJTKo0jA1SSbqzKLlBmZtl7eSlM0/J484CTKihECaRiXeqQZxJkN2lMfE9LJM1pY87ElrUzBh69FnWtAPHoUSY0GjCiTHxD7VCP6hadSyLOpxSnImfUacw8QNedrouw52gqzxL7T32OHvSLu5Qwkx8N1ePM6Em5Jk2var+TaXh4CLMxP92EhOZBv5iaKo7w50gGWOOpQDyF5hm/jxvRZ5WFLer6Y8lKPaKMiFjEnaBtE3MkpbIHI4yqTLLfmEmaK4XNNVg/p9ZJkrbHREI+UgKgVQF3Tqiv5gyd9GlKD7hTWpSqzhOLagYb57ND0jwQx1CVoEP087jcpiwc5HhefuDg4PQEhN7+/Jiyw9DHUxf6IQELtuCuaf+6/YjOdOZYBlRLyvy1OPNn/gOxWJeB1Ow/kCEJ1GiTJi1i9S1DBYJsyc+TdpMfrT9qw4dOUlJUEctv99+9OjRIusiUObJns2KVzFyV2Rs7pEchk4wMgh5lks+6vCYBLOtqUwspmZ7J4stCioSbP32e2TFCAq5NnPE5NHFYlCM4Xqg2dG7rx9+jlTMvwEjyoS0Y1D1B5JQGEp9BupbMSZBopDA5OcPX//vaMbUjbtJhoPkAjV+e44Lgc6ImutvGMrfC1qKwspEuxzefvzg24jq39sWZeKPHk2ZXnV23dz3N+jDGBPfjMi+Aup9sD58fIt2W0RqthiSvzGS3+i5A2fwFEPZXwwKB5OptN/1/lMpWy77+AlLLSMFk434bVm15KZ3RA3tr3DJh9DfAO+1yiyXyi1y2Ls/uaVWap3eQa/3R+9dW1lw7ZyDZB8jeeqTYBykB+XVslAQF+lcZyczcDvIo7Li78krkPR1EPlJIfYz5Dkz+nniFq1FkLyKIGGZiE8wlMMVoEjGKPsRSzkL2IusDicjOcRInoh8JuIXdPjRy1WgaMPv/XAne4FV0BQkL3Gbv4hJTMRn+Av/WhLK/qtX+xcZj0TJH8m6doFOvCSSf+EWPxOTmYifPShLdc8Lb/d7+qNz8haYat5pL7IrGJfpIfkspjERf9+8pqWYWOjVPrn9YMlbY5ZkMiY3IuyHK7OQPCvZ/F1MZyKKm9jTLlKiomlSe3g2Ohset03D+Ddh8uK7MnlBmPzbMMz2Ma5NW0K3iCzQAuxdN2MEOMnKYwwldW4J75cezcdT9IQafCeTsDuev15Dj0BZ9XFF12SCHvgET/t6Pt4VdFIbMB3PR21DS43ZzDZG8jgOgJfAPU6N8yEPc3g0xvulmYewoNu89q4uX7+++s4+9ur168urPVQZtjYQzXR8NDQTuZB4noOEy0T8MQmKCXvLaH4CdJu/fpbLI+GuKf5D9QQMRgcn8xHsSXEuBMmPvObzE/3LePLjdZfJiZ1Qg1sqyMU+mcQ6EklxLrmtT1hOuAwlPxCHOZyd9237TvGgQjcs9s9nQ9OgT1kgKQ4fSRIT8RNNfkwF3X1yBfS7yYMKORhwdb7eNqC9kBTnU0Lbk5iQCZVDbTjv33EcgRCY/nyoHTLTJddhQiZU3r+5JzyogP3mfWi65DpMPCjb72/igb3fUjaeZk1BksYET6hs/3rvmPy6HZ4uuRYT8cn29vsVHyx6C6W/3w5NlyzK5MsEg3yyec+8CRKwNzGSp5Mv/MbzmTzd3NzEbvmPm27AN9EfqGlz2EZ+D0qIYx8/fuzliwe5Pa7ytgi43iLKJmzjdeLYT/D7XnY0uOkmfAN5C6moifyojc/k2ePNzT/xq1vxCxdylrey9Ofm5uNn3NZzmHxGHujJc/w6vycC3yKRrTvPcTs/xwHEmUwgv+fktVPNPsMdVJXeqvoc9odJNpPfoe/ZJKlAro8ruU2i+4bmqLHR6dg4k8+bge+56ap/Q3kNRGPJZqz3xPvOJRy3vWCmdV/NBK084xZ+gW2Nj8ccH/vbxHPHS/5Wi7shsoPh2YSTC4aZwP7lh3a5P4fwdsnf7i0+9f0nj8mfyOWQMWdwl35l2BIC9Mbb56jRfyYymSOXQxKjXJ9ocytF9vx8QYPKPJHJk00a0tP7+e6z6NZsZAhPEpmITy8vPf9auZ/BWlhkd/6zy8twfszPdw7uv5UghfarZzG5j5kfTy639Vwm9zLz40m2eM3nMcn9qdG3V+yDi9KY5PtA01su9oFmKUxuuprfWYswuceZH09yK5vJvc78eIrf0Btl0ngIwVpY1ehtiREm9z3z4wkIg1Qm9z/z46mUxqT+0JyJp8iNziEmuf/qhrui8O1RLJMHkvnxFMoGWSYPJfPjyeUzeTCZH09sNhgwye+XCt9JMU9q8Znc82n6bAUT+T6Tm67SLVCUSfOhmwnzWAzCpFsgEfwn4nlMcv+dUndT5C5uwQvWHl7mxxPwQjfhoQdrYbmUyQPN/HjC2aDwgDM/nlA2KNzfDVrLSe5BJoUzCcsVhQed+fEk5/Qrc++X/h/Ab8DNhaH/BwAAAABJRU5ErkJggg=="
            />
            {/* {data.personal_details.industry} */}
            <span className="industry">
              {item.content.personal_details.industry}
            </span>
            {/* {data.personal_details.brand_name} */}
            <Card.Title>{item.content.personal_details.brand_name}</Card.Title>
            <Card.Text>
              <Row>
                <Col>
                  <span>Investment Range</span>
                </Col>
                <Col>
                  <span>{item.content.personal_details.inv}</span>
                </Col>
              </Row>
              <Row>
                <Col>
                  <span>Area Required</span>
                </Col>
                <Col>
                  <span>
                    {item.content.property_details.min} -{" "}
                    {item.content.property_details.max}
                  </span>
                </Col>
              </Row>
              <Row>
                <Col>
                  <span>No. of Frachise Outlet</span>
                </Col>
                <Col>
                  <span>
                    {item.content.personal_details.no_of_franch_outlets}
                  </span>
                </Col>
              </Row>
            </Card.Text>
            <Link
              to={"/brands/" + `${item._id}`}
              state={{ prop: item }}>
            <Button variant="outline-danger" className="button" >
              Know More
            </Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    );
  });
}

export default Franchise;
