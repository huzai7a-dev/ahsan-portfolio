import { Box, Button, Typography } from '@material-ui/core';
import style from '../../styles/Work.module.scss';
import Image from 'next/image'

function Work({project}) {
    return (
        <div className={style.work}>
            <div className={style.work__upper__overlay}>
                <a className={style.work__view__btn} href={project.link}  target="_blank" rel="noreferrer">
                    <Button variant="outlined" color="inherit">View</Button>
                </a>
            </div>
            <Box style={{textAlign:"center"}}>
                <Image
                src={project.image}
                height={100}
                width={project.width ? project.width : 100}
                alt="Logo"
                style={{objectFit:"cover"}}
                />
                <Typography variant="h5" align="center">{project.title}</Typography>
            </Box>
            <div className={style.work__lower__overlay}/>
        </div>
    )
}

export default Work
